import { EFFECTS, DEFAULT_EFFECT } from './data.js';
import { photoPreview } from './scale.js';

let chosenEffect = DEFAULT_EFFECT;

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
  }

  showSlider();
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  photoPreview.className = `effects__preview--${chosenEffect.name}`;
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
  photoPreview.style.photoFilter = isDefaultEffect() ?
    DEFAULT_EFFECT.style
    : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const renderEffect = () => {
  initiateSlider();
  hideSlider();
  photoFilter.addEventListener('change', onEffectsChange);
  slider.noUiSlider.on('update', onSliderUpdate);

};

export { resetEffects, renderEffect };

