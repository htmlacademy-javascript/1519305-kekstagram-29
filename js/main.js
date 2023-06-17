//Константы
const MIN_NUMBER_FOR_FUNCTIONS = 1;
const MAX_NUMBER_FOR_FUNCTIONS = 25;
const MAX_NUMBER_FOR_AVATAR = 6;
const MIN_NUMBER_FOR_COMMENT = 0;
const MAX_NUMBER_FOR_COMMENT = 30;
const MIN_NUMBERS_FOR_LIKES = 15;
const MAX_NUMBERS_FOR_LIKES = 200;

//Массивы
const messages = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неёполучилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];
const avatarNames = [
  'Лео Месси',
  'Неймар',
  'Карим Бензема',
  'Кевин Де Брюйне',
  'Мохаммед Салах',
  'Килиан Мбаппе',
  'Эрлинг Холланд',
  'Харри Кейн',
  'Мартин Эдегор',
  'Винисиус Жуниор',
];
const description = [
  'Сегодня был хороший день!',
  'Уставшие, но довольные',
  'Записываемся к моему мастеру. Он творит чудеса!',
  'Как бы хотелось, чтобы это лето не кончалось.',
  'Пятница! Вечер! Счастье!',
  'Никогда больше, вы слышите ? Никогда!',
  'Мы обязательно встретимся. Слышишь меня. Прости.',
  'Никто. Обсолютно никто. Я!',
  'А скоро Новый Год =)',
  'Потрачено',
];

//Генерация случайных чисел
const getRandomInteger = (minNumber, maxNumber) => {
  const min = Math.ceil(Math.min(Math.abs(minNumber),
    Math.abs(maxNumber)));
  const max = Math.floor(Math.max(Math.abs(minNumber),
    Math.abs(maxNumber)));
  const randomize = Math.random() * (max - min + 1) +
    min;

  return Math.floor(randomize);
};

// Генератор рандомного индекса
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генератор ID
const createGeneratorInRange = (firstIndex, lastIndex) => {
  const previousValues = [];
  return () => {
    let currentValue = firstIndex;

    if (previousValues.length >= lastIndex) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue++;
    }

    previousValues.push(currentValue);
    return currentValue;

  };
};

// Вспомогательные функции
const generatePhotoId = createGeneratorInRange(MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_FUNCTIONS);
const generateMessageId = createGeneratorInRange(MIN_NUMBER_FOR_FUNCTIONS, Infinity);

//Генерируем сообщение
const generateMessage = (fn) => {
  const message = [];
  while (message.length < fn) {
    message.push(getRandomArrayElement(messages));
  }
  return message;
};

//Генерируем коммент
const createComment = () => ({
  id: generateMessageId(),
  avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_AVATAR)}.svg`,
  message: generateMessage(getRandomInteger(MIN_NUMBER_FOR_FUNCTIONS, 2)).join(' '),
  name: getRandomArrayElement(avatarNames),
});

//Генерируем Фото
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${getRandomInteger(MIN_NUMBER_FOR_FUNCTIONS, MAX_NUMBER_FOR_FUNCTIONS)}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomInteger(MIN_NUMBERS_FOR_LIKES, MAX_NUMBERS_FOR_LIKES),
  comment: Array.from({ length: getRandomInteger(MIN_NUMBER_FOR_COMMENT, MAX_NUMBER_FOR_COMMENT) }, createComment),
});

const generatePhoto = Array.from({ length: MAX_NUMBER_FOR_FUNCTIONS }, createPhoto);

// eslint-disable-next-line no-unused-expressions
console.log(generatePhoto);
