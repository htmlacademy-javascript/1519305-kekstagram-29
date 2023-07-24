import { FILE_TYPES } from './constants-database.js';

const fileChooser = document.querySelector('.img-upload__input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const setPreviewPhotoListener = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const fileUrl = URL.createObjectURL(file);
      preview.src = fileUrl;
      effectsPreview.forEach((effect) => (effect.style.backgroundImage = `url(${fileUrl})`));
    }
  });
};

export {setPreviewPhotoListener};
