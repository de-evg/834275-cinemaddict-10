import {getRandomArrayItem} from './utils.js';

const createFilmCardTemplate = (filmCard) => {
  const {title, rating, year, duration, genres, poster, description, comments} = filmCard;

  const cutDesription = (desc) => {
    let result = desc;
    if (desc.length > 140) {
      result = `${desc.slice(0, 138)}...`;
    }
    return result;
  };

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${getRandomArrayItem(genres)}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${cutDesription(description)}</p>
      <a class="film-card__comments">${comments} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export {createFilmCardTemplate};
