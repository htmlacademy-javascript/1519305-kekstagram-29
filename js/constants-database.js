const MAX_TAG_COUNT = 5;
const MAX_RANDOM_MINIATURES = 10;
const TIME_OUT_OF_DELAY = 500;
const COMMENTS_PER_PORTION = 5;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  INVALID_COUNT: `Не более ${MAX_TAG_COUNT} хэштегов`,
  INVALID_PATTERN: 'Хэштег должен начинаться с # и состоять из букв и чисел',
  NOT_UNIQUE: 'Такой хэштег уже был',
};
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const defaultFilter = {
  name: 'none',
  style: 'none',
  min: 0,
  max: 0,
  step: 0,
  unit: '',
};

const chromeFilter = {
  name: 'chrome',
  style: 'grayscale',
  min: 0,
  max: 1,
  step: 0.1,
  unit: '',
};

const sepiaFilter = {
  name: 'sepia',
  style: 'sepia',
  min: 0,
  max: 1,
  step: 0.1,
  unit: '',
};

const marvinFilter = {
  name: 'marvin',
  style: 'invert',
  min: 0,
  max: 100,
  step: 1,
  unit: '%',
};

const phobosFilter = {
  name: 'phobos',
  style: 'blur',
  min: 0,
  max: 3,
  step: 0.1,
  unit: 'px',
};

const heatFilter = {
  name: 'heat',
  style: 'brightness',
  min: 1,
  max: 3,
  step: 0.1,
  unit: '',
};

const DEFAULT_EFFECT = defaultFilter;

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

export {MAX_TAG_COUNT, VALID_SYMBOLS,ErrorText, SubmitButtonText, COMMENTS_PER_PORTION, DEFAULT_SCALE, SCALE_STEP, MIN_SCALE,MAX_SCALE,defaultFilter, chromeFilter, sepiaFilter,marvinFilter,phobosFilter,heatFilter,DEFAULT_EFFECT, Filter, MAX_RANDOM_MINIATURES,TIME_OUT_OF_DELAY, FILE_TYPES};
