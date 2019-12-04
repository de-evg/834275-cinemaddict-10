const getRandomItemFromArray = (array) => {
  const randomIntegerNumber = getRandomNumber(0, array.length - 1);
  return array[randomIntegerNumber];
};

const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export {getRandomItemFromArray, getRandomNumber};
