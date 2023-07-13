import {createMiniatures} from './miniature-viewer.js';
import {generatePhotos} from './data.js';
import { renderPreviewForm } from './form.js';

const showPhotos = generatePhotos();
createMiniatures(showPhotos);

renderPreviewForm();
