import {getRandomNumber} from '../components/utils.js';

const userRatings = [`none`, `Novice`, `Fan`, `Movie Buff`];

const userRating = () => {
  const numberOfWatchedFilms = getRandomNumber(0, 22);
  let numberOfRatingName;
  if (numberOfWatchedFilms >= 21) {
    numberOfRatingName = 3;
  }
  if (numberOfWatchedFilms >= 11 && numberOfWatchedFilms <= 20) {
    numberOfRatingName = 2;
  }
  if (numberOfWatchedFilms >= 1 && numberOfWatchedFilms <= 10) {
    numberOfRatingName = 1;
  }
  if (numberOfWatchedFilms === 0) {
    numberOfRatingName = 0;
  }
  return numberOfRatingName;
};

const numberOfRatingName = userRating();

export {userRatings, numberOfRatingName};
