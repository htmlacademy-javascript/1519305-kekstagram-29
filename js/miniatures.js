const thumbnailsContainer = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnailElements = ({url, description, likes, comments, id}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  const thumbnailElementImage = thumbnailElement.querySelector('.picture__img');
  thumbnailElementImage.src = url;
  thumbnailElementImage.alt = description;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.dataset.thumbnailId = id;

  return thumbnailElement;
};

const renderThumbnail = (pictures) => {
  const thumbnailsContainerFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnailElements(picture);
    thumbnailsContainerFragment.appendChild(thumbnailElement);

  });

  thumbnailsContainer.appendChild(thumbnailsContainerFragment);
};
export {renderThumbnail};
