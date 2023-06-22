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
const descriptions = [
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

//Модульные функции
const getMinNumberForFunctions = () => MIN_NUMBER_FOR_FUNCTIONS;
const getMaxNumberForFunctions = () => MAX_NUMBER_FOR_FUNCTIONS;
const getMaxNumberForAvatar = () => MAX_NUMBER_FOR_AVATAR;
const getMinNumberForComment = () => MIN_NUMBER_FOR_COMMENT;
const getMaxNumberForComment = () => MAX_NUMBER_FOR_COMMENT;
const getMinNumberForLikes = () => MIN_NUMBERS_FOR_LIKES;
const getMaxNumberForLikes = () => MAX_NUMBERS_FOR_LIKES;
const getMessagesArray = () => messages;
const getAvatarNamesArray = () => avatarNames;
const getDescriptionsArray = () => descriptions;

export { getMinNumberForFunctions, getMaxNumberForFunctions, getMaxNumberForAvatar, getMinNumberForComment, getMaxNumberForComment, getMinNumberForLikes, getMaxNumberForLikes, getMessagesArray, getAvatarNamesArray, getDescriptionsArray};
