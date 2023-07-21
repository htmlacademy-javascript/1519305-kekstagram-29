import { debounce } from './utils.js';
import { createMiniatures } from './miniature-viewer.js';
import { RANDOM_PHOTOS_COUNT, TIMEOUT } from './data.js';

const photoFilter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const filterButtons = document.querySelectorAll('.img-filters__button');

const filterPictures = (pictures, sortButton) => {

  switch (sortButton) {
    case defaultFilter:
      return pictures;
    case randomFilter:
      return pictures.slice().sort(() => Math.random() - 0.5).slice(0, RANDOM_PHOTOS_COUNT);
    case discussedFilter:
      return pictures.slice().sort((a, b) => b.comments.length - a.comments.length);
  }

};

const removePictures = () =>
  document.querySelectorAll('.picture').forEach((miniature) => miniature.remove());

const setOnFilterClick = (evt, pictures) => {
  filterButtons.forEach((button) => button.classList.remove('img-filters__button--active'));

  const filterButton = evt.target;
  filterButton.classList.add('img-filters__button--active');

  removePictures();
  createMiniatures(filterPictures(pictures, filterButton));
};

const setDebouncedFilter = (pictures) => {
  filterForm.addEventListener('click', debounce((evt) => {
    setOnFilterClick(evt, pictures);
  }, TIMEOUT));
};

const showFilters = () => photoFilter.classList.remove('img-filters--inactive');

export { setDebouncedFilter, showFilters };
