import { imageElement } from './scale.js';
import {defaultFilter, chromeFilter, sepiaFilter,marvinFilter,phobosFilter,heatFilter,DEFAULT_EFFECT} from './constants-database.js';

const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');

let actualEffect = DEFAULT_EFFECT;

const isDefault = () => actualEffect === DEFAULT_EFFECT;

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: actualEffect.min,
      max: actualEffect.max
    },
    step: actualEffect.step,
    start: actualEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  switch (evt.target.value) {
    case 'chrome':
      actualEffect = chromeFilter;
      imageElement.className = `effects__preview--${actualEffect.name}`;
      updateSlider();
      break;
    case 'sepia':
      actualEffect = sepiaFilter;
      imageElement.className = `effects__preview--${actualEffect.name}`;
      updateSlider();
      break;
    case 'marvin':
      actualEffect = marvinFilter;
      imageElement.className = `effects__preview--${actualEffect.name}`;
      updateSlider();
      break;
    case 'phobos':
      actualEffect = phobosFilter;
      imageElement.className = `effects__preview--${actualEffect.name}`;
      updateSlider();
      break;
    case 'heat':
      actualEffect = heatFilter;
      imageElement.className = `effects__preview--${actualEffect.name}`;
      updateSlider();
      break;
    case 'none':
      actualEffect = defaultFilter;
      imageElement.className = `effects__preview--${actualEffect.name}`;
      updateSlider();
      break;
  }
};


const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${actualEffect.style}(${sliderValue}${actualEffect.unit})`;
  effectValue.value = sliderValue;
};

const resetEffects = () => {
  actualEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
