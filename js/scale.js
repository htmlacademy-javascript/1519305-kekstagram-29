import { SCALE_STEP,DEFAULT_SIZE,MIN_SIZE_VALUE } from './constants-database.js';

const smallerSize = document.querySelector('.scale__control--smaller');
const biggerSize = document.querySelector('.scale__control--bigger');
const sizeValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');

const scalePhoto = (size) => {
  photoPreview.style.transform = `scale(${size / 100})`;
  sizeValue.value = `${size}%`;
};

const onSmallerSizeClick = () => {
  const newValueElement = parseInt(sizeValue.value, 10);
  let newSmallValue = newValueElement - SCALE_STEP;

  if (newSmallValue < MIN_SIZE_VALUE) {
    newSmallValue = MIN_SIZE_VALUE;
  }

  scalePhoto(newSmallValue);
};

const onBiggerSizeClick = () => {
  const newValueElement = parseInt(sizeValue.value, 10);
  let newBigValue = newValueElement + SCALE_STEP;

  if (newBigValue > DEFAULT_SIZE) {
    newBigValue = DEFAULT_SIZE;
  }

  scalePhoto(newBigValue);
};

const resetScale = () => scalePhoto(DEFAULT_SIZE);

const onScalePhotoClick = () => {
  smallerSize.addEventListener('click', onSmallerSizeClick);
  biggerSize.addEventListener('click', onBiggerSizeClick);
};

export { resetScale, onScalePhotoClick };
