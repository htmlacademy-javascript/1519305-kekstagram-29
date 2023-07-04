import {showBigPhoto} from './big-photo-viewer.js';

const miniatureClickHandler = (photos) => (evt) => {
  evt.preventDefault();
  const photoId = evt.target.parentNode.dataset.photoId;
  showBigPhoto(photos.find((photo) => photo.id === parseInt(photoId, 10)));
};

const createMiniature = (template, photo) => {
  const miniatureElement = template.querySelector('.picture').cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = photo.url;
  miniatureElement.querySelector('.picture__likes').textContent = photo.likes;
  miniatureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  miniatureElement.dataset.photoId = photo.id;
  return miniatureElement;
};

const createMiniatures = (photos) => {
  const fragment = document.createDocumentFragment();
  const templateContent = document.querySelector('#picture').content;
  const onMiniatureClick = miniatureClickHandler(photos);

  photos.forEach((photo) => {
    const miniature = createMiniature(templateContent, photo);
    miniature.addEventListener('click', onMiniatureClick);
    fragment.append(miniature);
  });

  const photoContainer = document.querySelector('.pictures');
  photoContainer.append(fragment);
};

export {createMiniatures};

