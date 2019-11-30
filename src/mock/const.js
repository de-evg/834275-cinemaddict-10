const flimDescTemplate = `Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique
felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam
nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros
mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit,
eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const getRandomArrayItem = (array) => {
  const randomIntegerNumber = getRandomNumber(0, array.length);
  return array[randomIntegerNumber];
};

const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export {flimDescTemplate, getRandomArrayItem, getRandomNumber};
