//Функция для проверки длины строки.

const checkStringLength = (string, length) => {
  if (string.length <= length) {
    return true;
  }
  return false;
};
checkStringLength();

//Функция для проверки, является ли строка палиндромом

const checkForPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  let result = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    result += normalizeString.at(i);
  }
  if (result === normalizeString) {
    return true;
  }
  return false;
};
checkForPalindrome();

//Функция извлекает число из строки

const getNumberFromString = (string) => {
  const checkoutString = String(string);
  let numbers;
  let result = '';
  for (const i in checkoutString) {
    numbers = parseInt(checkoutString[i], 10);
    if (!Number.isNaN(numbers)) {
      result += numbers;
    }
  }
  return result;
};
getNumberFromString();

// Проверка на переработку

const TIME_IN_MINUTES = 60;

const isNotCrunch = (workDayStart, workDayEnd, meetingTime, meetingDuration) => {
  const doMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * TIME_IN_MINUTES + minutes;
  };
  const meeting = doMinutes(meetingTime) + meetingDuration;

  if (doMinutes(workDayStart) <= meeting && meeting <= doMinutes(workDayEnd)) {
    return true;
  }

  return false;
};

isNotCrunch();
