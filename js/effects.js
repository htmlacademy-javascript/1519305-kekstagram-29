import { EFFECTS, DEFAULT_EFFECT } from './constants-database.js';

let chosenEffect = DEFAULT_EFFECT;

const chosenPhoto = document.querySelector('.img-upload__preview img');
const photoFilter = document.querySelector('.effects');
const slider = document.querySelector('.effect-level__slider');
const sliderLevel = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const isDefaultEffect = () => chosenEffect === DEFAULT_EFFECT;

const showSlider = () => sliderLevel.classList.remove('hidden');

const hideSlider = () => sliderLevel.classList.add('hidden');

const updateSlider = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefaultEffect()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  chosenPhoto.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const initiateSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    start: DEFAULT_EFFECT.max,
    step: DEFAULT_EFFECT.step,
    connect: 'lower',
  });
};

const onSliderUpdate = () => {
  const sliderValue = slider.noUiSlider.get();
  chosenPhoto.style.filter = isDefaultEffect()
    ? DEFAULT_EFFECT.style
    : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectLevel.value = sliderValue;
};

const resetEffect = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const renderEffect = () => {
  initiateSlider();
  hideSlider();
  photoFilter.addEventListener('change', onEffectsChange);
  slider.noUiSlider.on('update', onSliderUpdate);

};

export { resetEffect, renderEffect };

