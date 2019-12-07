import {numberOfRatingName} from '../mock/user-rating.js';
import {userRatings} from '../mock/const.js';

const createUserRatingTemplate = () => {
  if (numberOfRatingName === 0) {
    return ``;
  }
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${userRatings[numberOfRatingName]}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export {createUserRatingTemplate};
