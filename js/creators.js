import { getRandomInteger, getRandomArrayElement, createGeneratorInRange } from './generators.js';
import { getMinNumberForFunctions, getMaxNumberForFunctions, getMaxNumberForAvatar, getMinNumberForComment, getMaxNumberForComment, getMinNumberForLikes, getMaxNumberForLikes, getMessagesArray, getAvatarNamesArray, getDescriptionsArray} from './data.js';

// Вспомогательные функции
const generatePhotoId = createGeneratorInRange(getMinNumberForFunctions, getMaxNumberForFunctions);
const generateMessageId = createGeneratorInRange(getMinNumberForFunctions, Infinity);

//Создаем сообщение
const generateMessage = () => {
  const message = [];
  while (message.length < getRandomInteger(getMinNumberForFunctions, getMaxNumberForAvatar)) {
    message.push(getRandomArrayElement(getMessagesArray));
  }
  return message;
};

//Создаем коммент
const createComment = () => ({
  id: generateMessageId(),
  avatar: `img/avatar-${getRandomInteger(getMinNumberForFunctions, getMaxNumberForAvatar)}.svg`,
  message: generateMessage(getRandomInteger(getMinNumberForFunctions, 2)).join(' '),
  name: getRandomArrayElement(getAvatarNamesArray),
});

//создаем Фото
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${getRandomInteger(getMinNumberForFunctions, getMaxNumberForFunctions)}.jpg`,
  description: getRandomArrayElement(getDescriptionsArray),
  likes: getRandomInteger(getMinNumberForLikes, getMaxNumberForLikes),
  comment: Array.from({ length: getRandomInteger(getMinNumberForComment, getMaxNumberForComment) }, createComment),
});

const generatePhoto = () => Array.from({ length: getMaxNumberForFunctions }, createPhoto);

export { generatePhoto };

