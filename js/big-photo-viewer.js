import { COMMENT_LOAD_STEP } from './data.js';
import { isEscapeKey } from './utils.js';

const bigPhoto = document.querySelector('.big-picture');
const closeButton = bigPhoto.querySelector('.big-picture__cancel');
const comments = bigPhoto.querySelector('.social__comments');
const loadMoreComments = bigPhoto.querySelector('.comments-loader');
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


const renderCommentsLoad = (photoComments) => {
  let commentsShowed = 0;
  const allComments = photoComments.length;
  return () => {
    const firstCommentLoad = commentsShowed;
    const showCommentsCount = Math.min(allComments, commentsShowed + COMMENT_LOAD_STEP);
    for (let i = firstCommentLoad; i < showCommentsCount; i++) {
      const { avatar, name, message } = photoComments[i];
      const newComment = liElement.cloneNode(true);
      const photo = newComment.querySelector('.social__picture');
      photo.src = avatar;
      photo.alt = name;
      newComment.querySelector('.social__text').textContent = message;
      comments.append(newComment);
      commentsShowed++;
    }
    bigPhoto.querySelector('.social__comment-count').innerHTML = `${commentsShowed} из <span class="comments-count">${allComments}</span> комментариев`;
    if (commentsShowed === allComments) {
      loadMoreComments.classList.add('hidden');
    }
  };
};

let onClickShowMoreComments = () => { };

const fillTemplate = (photo) => {
  loadMoreComments.classList.remove('hidden');
  bigPhoto.querySelector('.big-picture__img img').src = photo.url;
  bigPhoto.querySelector('.likes-count').textContent = photo.likes;
  bigPhoto.querySelector('.social__caption').textContent = photo.description;
  comments.innerHTML = '';
  onClickShowMoreComments = renderCommentsLoad(photo.comments);
  onClickShowMoreComments();
};

function closeBigPhoto () {
  document.body.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');

  closeButton.removeEventListener('click', onCloseButtonClick);
  loadMoreComments.removeEventListener('click', onClickShowMoreComments);
  document.removeEventListener('keydown', onEscKeyDown);
}

const showBigPhoto = (photo) => {
  fillTemplate(photo);

  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');

  loadMoreComments.addEventListener('click', onClickShowMoreComments);
  closeButton.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', onEscKeyDown);
};

export {showBigPhoto};
