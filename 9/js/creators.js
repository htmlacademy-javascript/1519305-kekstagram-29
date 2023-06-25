import { getRandomInteger, getRandomArrayElement, createGeneratorInRange } from './generators.js';
import { MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_AVATAR, MIN_NUMBER_FOR_COMMENT, MAX_NUMBER_FOR_COMMENT, MIN_NUMBERS_FOR_LIKES, MAX_NUMBERS_FOR_LIKES, messages, avatarNames, descriptions} from './data.js';

// Вспомогательные функции
const generatePhotoId = createGeneratorInRange(MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_FUNCTIONS);
const generateMessageId = createGeneratorInRange(MIN_NUMBER_FOR_FUNCTIONS, Infinity);

//Создаем сообщение
const generateMessage = () => {
  const message = [];
  while (message.length < getRandomInteger(MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_AVATAR)) {
    message.push(getRandomArrayElement(messages));
  }
  return message;
};

//Создаем коммент
const createComment = () => ({
  id: generateMessageId(),
  avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_AVATAR)}.svg`,
  message: generateMessage(getRandomInteger(MIN_NUMBER_FOR_FUNCTIONS, 2)).join(' '),
  name: getRandomArrayElement(avatarNames),
});

//создаем Фото
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${getRandomInteger(MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_FUNCTIONS)}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(MIN_NUMBERS_FOR_LIKES, MAX_NUMBERS_FOR_LIKES),
  comment: Array.from({ length: getRandomInteger(MIN_NUMBER_FOR_COMMENT, MAX_NUMBER_FOR_COMMENT) }, createComment),
});

const generatePhoto = () => Array.from({ length: MAX_NUMBER_FOR_FUNCTIONS }, createPhoto);

export { generatePhoto };

