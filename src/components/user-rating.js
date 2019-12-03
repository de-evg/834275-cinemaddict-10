import {userRatings, numberOfRatingName} from '../mock/user-rating.js';

const createUserRatingTemplate = () => {
  let result = ``;
  if (numberOfRatingName !== 0) {
    result =
      `<section class="header__profile profile">
        <p class="profile__rating">${userRatings[numberOfRatingName]}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`;
  }
  return result;
};

export {createUserRatingTemplate};
