import { resetZoom } from './scale.js';
import { resetEffects } from './slider.js';
import { sendData } from './api.js';
import { showPreviewPhoto } from './upload-img.js';
import { showErrorMessage, showSuccessMessage } from './alerts.js';
import {MAX_TAG_COUNT, VALID_SYMBOLS,ErrorText, SubmitButtonText, MAX_COMMENT_LENGTH, ValidationPriority} from './constants-database.js';

const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');
const uploadControl = uploadForm.querySelector('#upload-file');
const sendFormButton = uploadForm.querySelector('.img-upload__submit');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadOverlay.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const validateCommentInput = (value) => value.length <= MAX_COMMENT_LENGTH;

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const onPageKeydown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    onCloseModalButtonClick();
  }
};

const disableSendButton = () => pristine.validate()
  ? sendFormButton.removeAttribute('disabled')
  : sendFormButton.setAttribute('disabled', true);


const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPageKeydown);
  uploadCancelButton.addEventListener('click', onCloseModalButtonClick);
  hashtagField.addEventListener('input', disableSendButton);
};

function onCloseModalButtonClick () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPageKeydown);
  uploadCancelButton.removeEventListener('click', onCloseModalButtonClick);
  hashtagField.removeEventListener('input', disableSendButton);
  uploadForm.reset();
  pristine.reset();
  resetZoom();
  resetEffects();
}

const normalizeTags = (tags) => tags.trim().split(' ').filter((tag) => Boolean(tag.length));

const isValidTag = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const isValidTagsCount = (value) => normalizeTags(value).length <= MAX_TAG_COUNT;

const isUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

pristine.addValidator(commentField, validateCommentInput);

pristine.addValidator(
  hashtagField,
  isValidTagsCount,
  ErrorText.INVALID_COUNT,
  ValidationPriority.THIRD,
  true
);

pristine.addValidator(
  hashtagField,
  isValidTag,
  ErrorText.INVALID_PATTERN,
  ValidationPriority.SECOND,
  true
);

pristine.addValidator(
  hashtagField,
  isUniqueTags,
  ErrorText.NOT_UNIQUE,
  ValidationPriority.FIRST,
  true
);

const blockSubmitButton = () => {
  sendFormButton.disabled = true;
  sendFormButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  sendFormButton.disabled = false;
  sendFormButton.textContent = SubmitButtonText.IDLE;
};

uploadControl.addEventListener('change', () => {
  openModal();
  showPreviewPhoto();
});

const setUserFormSubmit = () => {

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      sendData(formData)
        .then(()=>{
          onCloseModalButtonClick();
          showSuccessMessage();
        })
        .catch(() => {
          showErrorMessage();
        }
        )
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit, onPageKeydown};
