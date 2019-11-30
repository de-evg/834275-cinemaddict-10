import {flimDescTemplate, getRandomArrayItem, getRandomNumber} from './const.js';
const FILMS_COUNT = 15;
const MIN_SENTENCE_COUNT = 1;
const MAX_SENTENCE_COUNT = 3;

const filmRating = {
  MIN: 1,
  MAX: 10
};
const filmYear = {
  MIN: 1896,
  MAX: 2019
};
const filmDuration = {
  MIN_HOUR: 0,
  MAX_HOUR: 24,
  MIN_MINUTES: 0,
  MAX_MINUTES: 59
};

const filmComment = {
  MIN: 0,
  MAX: 99
};

const FilmNames = [
  `Милые кости`,
  `Мстители`,
  `Зеленая книга`,
  `Терминатор 2`,
  `Интерстеллар`,
  `Ворон`,
  `Призрак в доспехах`,
  `В джазе только девушки`,
  `Тихое место`,
  `Война миров Z`,
  `Хроники Риддика`,
  `Бакурау`,
  `Старикам тут не место`,
  `Заражение`,
  `Омерзительная восьмерка`
];

const Posters = [
  `../../public/images/posters/made-for-each-other.png`,
  `../../public/images/posters/popeye-meets-sinbad.png`,
  `../../public/images/posters/sagebrush-trail.jpg`,
  `../../public/images/posters/santa-claus-conquers-the-martians.jpg`,
  `../../public/images/posters/the-dance-of-life.jpg`,
  `../../public/images/posters/the-great-flamarion.jpg`,
  `../../public/images/posters/the-man-with-the-golden-arm.jpg`
];

const Genres = [
  `Musical`,
  `Mystery`,
  `Drama`,
  `Comedy`,
  `Horror`,
];

const descriptionTemplates = flimDescTemplate.split(`. `);

const generateFilmDescription = (descriptionTamplates) => {
  const sentenceCount = getRandomNumber(MIN_SENTENCE_COUNT, MAX_SENTENCE_COUNT);
  const description = [];
  for (const i = 1; i < sentenceCount; i++) {
    description.push(getRandomArrayItem(descriptionTamplates));
  }
  return description;
};

const generateFilmsDescriptions = (descTemplates, count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmDescription(descTemplates));
};

const FilmsDescriptions = generateFilmsDescriptions(descriptionTemplates, FILMS_COUNT);

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const generateFilmDuration = (duration) => {
  const hour = castTimeFormat(getRandomNumber(duration.MIN_HOUR, duration.MAX_HOUR));
  const minutes = castTimeFormat(getRandomNumber(duration.MIN_MINUTES, duration.MAX_MINUTES));
  return `${hour}h ${minutes}m`;
};

const generateFilmCard = () => {
  return {
    title: getRandomArrayItem(FilmNames),
    rating: getRandomNumber(filmRating.MIN, filmRating.MAX),
    year: getRandomNumber(filmYear.MIN, filmYear.MAX),
    duration: generateFilmDuration(filmDuration),
    ganre: getRandomArrayItem(Genres),
    poster: getRandomArrayItem(Posters),
    description: getRandomArrayItem(FilmsDescriptions),
    comments: `${getRandomNumber(filmComment.MIN, filmComment.MAX)} comments`
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmCard);
};

export {generateFilmCard, generateFilmCards};
