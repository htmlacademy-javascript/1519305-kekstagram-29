import {createMiniatures} from './miniature-viewer.js';
import { renderPreviewForm, onFormSubmit, unblockSubmitButton, closePreview } from './form.js';
import { onScalePhotoClick } from './scale.js';
import { renderEffect } from './effects.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';
import { showErrorMessage, showSuccessMessage } from './form-messages.js';

onFormSubmit(async (data) => {
  try {
    await sendData(data);
    closePreview();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
  }
});

onScalePhotoClick();
renderEffect();

try {
  const data = await getData();
  createMiniatures(data);
  renderPreviewForm(data);
} catch (err) {
  showAlert(err.message);
}
