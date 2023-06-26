import { generatePhoto } from './creators.js';

const otherUsersPhotos = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');
const fillPhotoData = generatePhoto();
const photosFragment = document.createDocumentFragment();

fillPhotoData.forEach(({url, description, likes, comment}) => {
  const photoElement = pictureTemplate.content.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comment.length;
  photosFragment.append(photoElement);
});

const usersPhotos = () => otherUsersPhotos.append(photosFragment);

export {usersPhotos};

