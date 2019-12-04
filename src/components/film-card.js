import {getRandomItemFromArray} from './utils.js';

const createFilmCardTemplate = (filmCard) => {
  const {title, rating, year, duration, genres, posterURL, description, commentsCount} = filmCard;

  const cutDesription = (desc) => {
    let n = 140;
    return desc.length > n ? `${desc.substr(0, n - 2)}...` : desc;
  };

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${getRandomItemFromArray(genres)}</span>
      </p>
      <img src="${posterURL}" alt="" class="film-card__poster">
      <p class="film-card__description">${cutDesription(description)}</p>
      <a class="film-card__comments">${commentsCount} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export {createFilmCardTemplate};
