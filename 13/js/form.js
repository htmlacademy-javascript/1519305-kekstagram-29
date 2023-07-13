import { isEscapeKey } from './utils.js';
import { SERVER_URL, MAX_HASHTAG_COUNT } from './data.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
uploadForm.method = 'post';
uploadForm.enctype = 'multipart/form-data';
uploadForm.action = SERVER_URL;
const hashtag = document.querySelector('.text__hashtags');
hashtag.required = true;
const commentText = document.querySelector('.text__description');
const uploadCloseButton = document.querySelector('.img-upload__cancel');


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const onPreviewCloseClick = () => {
  closePreviw();
};

const onPreviewEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePreviw();
  }
};

const onInputKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

function closePreviw() {
  uploadForm.reset();

  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPreviewEscKeyDown);
  resetEffects();
  resetScale();
}

const onPreviewSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    uploadForm.submit();
    closePreviw();
  }
};

const validateHashtag = (hashTag) => new RegExp('^#[а-яёa-z0-9]{1,19}$').test(hashTag);
const isHashtagUnique = (hashTags) => {
  for (const tag of hashTags) {
    if (hashTags.reduce((acc, cur) => {
      if (cur === tag) {
        return ++acc;
      }
    }, 0) > 1) {
      return false;
    }
  }
  return true;
};
const validateHashtags = (value) => {
  const hashtags = value?.toLowerCase().split(' ').filter((tag) => tag !== '');
  return hashtags.length <= MAX_HASHTAG_COUNT && isHashtagUnique(hashtags) && hashtags.every(validateHashtag);
};

const onPhotoSelect = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  uploadCloseButton.addEventListener('click', onPreviewCloseClick);
  document.addEventListener('keydown', onPreviewEscKeyDown);
};

const renderPreviewForm = () => {
  uploadInput.addEventListener('change', onPhotoSelect);
  uploadForm.addEventListener('submit', onPreviewSubmit);
  hashtag.addEventListener('keydown', onInputKeyDown);
  commentText.addEventListener('keydown', onInputKeyDown);

  pristine.addValidator(hashtag, validateHashtags, '<br>Хэштег должен начинаться с # и быть не больше 19 симоволов');
};

export { renderPreviewForm };
