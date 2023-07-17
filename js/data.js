
const COMMENT_LOAD_STEP = 5;
const SERVER_URL = 'https://29.javascript.pages.academy/kekstagram';
const MAX_HASHTAG_COUNT = 5;
const SCALE_STEP = 25;
const DEFAULT_SIZE = 100;
const MIN_SIZE_VALUE = 25;
const ALERT_SHOW_TIME = 5000;

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];
const DEFAULT_EFFECT = EFFECTS[0];

export { COMMENT_LOAD_STEP, SERVER_URL, MAX_HASHTAG_COUNT,SCALE_STEP,DEFAULT_SIZE,MIN_SIZE_VALUE,EFFECTS,DEFAULT_EFFECT, ALERT_SHOW_TIME };

