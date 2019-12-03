import {filmDescTemplate, ageRating, MonthNames} from './const.js';
import {getRandomArrayItem, getRandomNumber} from '../components/utils.js';

const FILMS_COUNT = 15;
const MIN_SENTENCE_COUNT = 1;
const MAX_SENTENCE_COUNT = 3;

const filmRating = {
  MIN: 1,
  MAX: 10
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
  `./images/posters/made-for-each-other.png`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`
];

const Genres = [
  `Musical`,
  `Mystery`,
  `Drama`,
  `Comedy`,
  `Horror`,
];

const Directos = [
  `Martin Scorsese`,
  `Peter Jackson`,
  `Steven Spielberg`
];

const Countries = [
  `Russia`,
  `USA`,
  `France`,
  `Italy`
];

const Writers = [
  `Daria Doncova`,
  `Fedor Bondarchuk`,
  `Quentin Tarantino`
];

const Actors = [
  `Arnold Schwarzenegger`,
  `Louis de Funès`,
  `Pierre Richard`
];

const descriptionTemplates = filmDescTemplate.split(`. `);

const generateReleaseRandomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return `${day} ${MonthNames[month]} ${year} `;
};

const generateFilmDescription = () => {
  const sentenceCount = getRandomNumber(MIN_SENTENCE_COUNT, MAX_SENTENCE_COUNT);
  let description = ``;
  for (let i = 1; i <= sentenceCount; i++) {
    description += `${getRandomArrayItem(descriptionTemplates)}. `;
  }
  return description;
};

const generateFilmDuration = (duration) => {
  const hour = getRandomNumber(duration.MIN_HOUR, duration.MAX_HOUR);
  const minutes = getRandomNumber(duration.MIN_MINUTES, duration.MAX_MINUTES);
  return `${hour}h ${minutes}m`;
};

const generateGenres = () => {
  const genres = new Set();
  for (let i = 0; i < 3; i++) {
    genres.add(getRandomArrayItem(Genres));
  }
  return genres;
};

const generateFilmCard = () => {
  return {
    title: getRandomArrayItem(FilmNames),
    originalTitle: getRandomArrayItem(FilmNames),
    rating: getRandomNumber(filmRating.MIN, filmRating.MAX),
    year: generateReleaseRandomDate(new Date(1900, 0, 1), new Date()).slice(-5, -1),
    releaseDate: generateReleaseRandomDate(new Date(1900, 0, 1), new Date()),
    duration: generateFilmDuration(filmDuration),
    genres: Array.from(generateGenres()),
    poster: getRandomArrayItem(Posters),
    description: generateFilmDescription(),
    comments: getRandomNumber(filmComment.MIN, filmComment.MAX),
    ageRating: getRandomArrayItem(ageRating),
    director: getRandomArrayItem(Directos),
    writers: getRandomArrayItem(Writers),
    actors: getRandomArrayItem(Actors),
    country: getRandomArrayItem(Countries)
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
    .fill(null)
    .map(generateFilmCard);
};

const films = generateFilmCards(FILMS_COUNT);

export {films};
