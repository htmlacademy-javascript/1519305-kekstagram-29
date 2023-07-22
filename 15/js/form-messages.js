import { isEscapeKey } from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onSuccessCloseButtonClick = () => {
  closeSuccessMessage();
};

const onCloseSuccessMessage = (evt) => isEscapePress(evt, closeSuccessMessage);

const onSuccessPageClick = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

const showSuccessMessage = () => {
  const successModal = successTemplate.cloneNode(true);
  document.body.append(successModal);

  successModal.querySelector('.success__button').addEventListener('click', onSuccessCloseButtonClick);
  document.addEventListener('click', onSuccessPageClick);
  document.addEventListener('keydown', onCloseSuccessMessage);
};

function closeSuccessMessage() {
  document.body.querySelector('.success').remove();

  document.removeEventListener('click', onSuccessPageClick);
  document.removeEventListener('keydown', onCloseSuccessMessage);
}

const onErrorCloseButtonClick = () => {
  closeErrorMessage();
};

const onErrorPageKeydown = (evt) => isEscapePress(evt, closeErrorMessage);

const onErrorDocumentClick = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.error__inner')) {
    closeErrorMessage();
  }
};

const showErrorMessage = () => {
  const errorModal = errorTemplate.cloneNode(true);
  document.body.append(errorModal);
  document.body.classList.add('modal-open');

  errorModal.querySelector('.error__button').addEventListener('click', onErrorCloseButtonClick);
  document.addEventListener('click', onErrorDocumentClick);
  document.addEventListener('keydown', onErrorPageKeydown);
};

function isEscapePress(evt, cb) {

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cb();
  }
}

function closeErrorMessage() {
  document.body.querySelector('.error').remove();
  document.body.classList.remove('modal-open');

  document.removeEventListener('click', onErrorDocumentClick);
  document.removeEventListener('keydown', onErrorPageKeydown);
}

export { showErrorMessage, showSuccessMessage };
