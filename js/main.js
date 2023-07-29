import {renderThumbnail} from'./miniatures.js';
import {renderBigPhoto} from'./modal-window.js';
import './form.js';
import'./slider.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';
import { showAlert } from './alerts.js';
import {initiateSorting} from './sort.js';

getData()
  .then((data) => {
    renderThumbnail(data);
    renderBigPhoto(data);
    initiateSorting(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
setUserFormSubmit();
