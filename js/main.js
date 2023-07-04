import {createMiniatures} from './miniature-viewer.js';
import {generatePhotos} from './data.js';

const showPhotos = generatePhotos();
createMiniatures(showPhotos);
