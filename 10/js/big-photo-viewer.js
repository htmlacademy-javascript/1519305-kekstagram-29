import { isEscapeKey } from './utils.js';

const bigPhoto = document.querySelector('.big-picture');
const closeButton = bigPhoto.querySelector('.big-picture__cancel');
const comments = bigPhoto.querySelector('.social__comments');
const liElement = comments.querySelector('li');


const onCloseButtonClick = () => {
  closeBigPhoto();
};

const onEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto () {
  document.body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');
  closeButton.removeEventListener('click', closeBigPhoto);
  document.removeEventListener('keydown', onEscKeyDown);
}

const fillComments = (photoComments) => {
  comments.innerHTML = '';
  photoComments.forEach(({avatar, name, message}) => {
    const newComment = liElement.cloneNode(true);
    const photo = newComment.querySelector('.social__picture');
    photo.src = avatar;
    photo.alt = name;
    newComment.querySelector('.social__text').textContent = message;
    comments.append(newComment);
  });
};

const fillTemplate = (photo) => {
  bigPhoto.querySelector('.big-picture__img img').src = photo.url;
  bigPhoto.querySelector('.likes-count').textContent = photo.likes;
  bigPhoto.querySelector('.comments-count').textContent = photo.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = photo.description;

  fillComments(photo.comments);
};

const showBigPhoto = (photo) => {
  fillTemplate(photo);

  bigPhoto.classList.remove('hidden');
  bigPhoto.querySelector('.social__comment-count').classList.add('hidden');
  bigPhoto.querySelector('.comments-loader').classList.add('hidden');

  document.body.classList.add('modal-open');

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscKeyDown);
};

export {showBigPhoto};
