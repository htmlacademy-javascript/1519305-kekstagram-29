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

export { getRandomInteger, getRandomArrayElement, createGeneratorInRange };
