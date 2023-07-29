import {debounce, getRandomInteger} from './util.js';
import {renderThumbnail} from './miniatures.js';
import {Filter, MAX_RANDOM_MINIATURES,TIME_OUT_OF_DELAY} from './constants-database.js';

const sortContainer = document.querySelector('.img-filters');
const defaultSort = document.querySelector('#filter-default');
const btnSortForm = document.querySelector('.img-filters__form');
const buttons = btnSortForm.childNodes;
const randomSort = document.querySelector('#filter-random');
const discussSort = document.querySelector('#filter-discussed');

const activeSortClass = 'img-filters__button--active';

const showSorting = () => {
  sortContainer.classList.remove('img-filters--inactive');
};

const deleteMiniatures = () => {
  const personalMiniatures = document.querySelectorAll('.picture');
  if (personalMiniatures) {
    personalMiniatures.forEach((personalMiniature) => {
      personalMiniature.remove();
    });
  }
};

const sortRandomMiniatures = (arr) => {
  const newRandomMiniatures = arr.sort(getRandomInteger);

  return newRandomMiniatures.slice(0, MAX_RANDOM_MINIATURES);
};

const sortDiscussMiniatures = (arr) => arr.slice().sort((arrItemA, arrItemB) => arrItemB.comments.length - arrItemA.comments.length);

const renderDefaultThumbnails = debounce((arr) => {
  deleteMiniatures();
  renderThumbnail(arr);
}, TIME_OUT_OF_DELAY);

const renderRandomThumbnails = debounce((arr) => {
  deleteMiniatures();
  renderThumbnail(sortRandomMiniatures(arr));
}, TIME_OUT_OF_DELAY);

const renderDiscussThumbnails = debounce((arr) => {
  deleteMiniatures();
  renderThumbnail(sortDiscussMiniatures(arr));
}, TIME_OUT_OF_DELAY);

const reGenerateThumbnails = (arr, btn) => {
  if (btn.id === Filter.RANDOM) {

    randomSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    discussSort.classList.remove(activeSortClass);
    renderRandomThumbnails(arr);
  }

  if (btn.id === Filter.DISCUSSED) {

    discussSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    randomSort.classList.remove(activeSortClass);
    renderDiscussThumbnails(arr);
  }

  if (btn.id === Filter.DEFAULT) {

    defaultSort.classList.add(activeSortClass);
    discussSort.classList.remove(activeSortClass);
    randomSort.classList.remove(activeSortClass);
    renderDefaultThumbnails(arr);
  }
};

const initiateSorting = (data) => {
  showSorting();
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => reGenerateThumbnails(data, btn));
  });
};


export {initiateSorting};
