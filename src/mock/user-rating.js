import {getRandomNumber} from '../components/utils.js';

const userRatings = [`none`, `Novice`, `Fan`, `Movie Buff`];

const userRating = () => {
  const numberOfWatchedFilms = getRandomNumber(0, 22);
  if (numberOfWatchedFilms >= 21) {
    return 3;
  }
  if (numberOfWatchedFilms >= 11 && numberOfWatchedFilms <= 20) {
    return 2;
  }
  if (numberOfWatchedFilms >= 1 && numberOfWatchedFilms <= 10) {
    return 1;
  }
  return 0;
};

const numberOfRatingName = userRating();

export {userRatings, numberOfRatingName};
