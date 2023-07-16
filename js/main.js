import {createMiniatures} from './miniature-viewer.js';
import {generatePhotos} from './data.js';
import { renderPreviewForm } from './form.js';
import { onScalePhotoClick } from './scale.js';
import { renderEffect } from './effects.js';

const showPhotos = generatePhotos();
createMiniatures(showPhotos);

renderPreviewForm();
onScalePhotoClick();
renderEffect();
