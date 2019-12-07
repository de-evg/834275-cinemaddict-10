
import {createMainMenuTemplate} from  './components/main-menu.js';
import {createUserRatingTemplate} from  './components/user-rating.js';
import {createFilmsContainerTemplate} from  './components/films-container.js';
import {createFilmCardTemplate} from  './components/film-card.js';
import {createSortMenuTemplate} from  './components/sort-menu.js';
import {createFilmPopupTemplate} from  './components/film-popup.js';
import {createShowMoreButtonTemplate} from  './components/show-more-button.js';
import {createStatisticContainerTemplate} from  './components/statistic-container.js';
import {createStatisticFiltersTemplate} from  './components/statistic-filters.js';
import {createStatisticRankTemplate} from  './components/statistic-rank.js';
import {createStatisticTextListTemplate} from  './components/statistic-text-list.js';
import {createStatisticChartTemplate} from  './components/statistic-chart.js';
import {createCommentTemplate} from './components/comments.js';
import {films} from './mock/film-card.js';

const FILM_LIST_COUNT = 5;
const SHOWING_FILMS_BY_BUTTON_COUNT = 5;
const FILM_EXTRA_LIST_COUNT = 2;

const render = (container, template) => {
  container.insertAdjacentHTML(`beforeEnd`, template);
};

const renderManyTemplates = (showingFilmsCount, container, films) => {
  films.slice(0, showingFilmsCount).forEach(
    (film) => {
      render(container, createFilmCardTemplate(film));
    }
  );
};

const generateMainMenuCounts = (films) => {
  const mainMenuCount = {
    watchlist: 0,
    watched: 0,
    favorite: 0
  };

  films.forEach((film) => {
    if (film.inWatchlist) {
      mainMenuCount.watchlist += 1;
    }
    if (film.isWatched) {
      mainMenuCount.watched += 1;
    }
    if (film.isFavorite) {
      mainMenuCount.favorite += 1;
    }
  });
  return mainMenuCount;
};

const sortingFilmsByRating = (films) => {
  const haveRating = films.some((film) => {
    return film.rating !== 0;
  });

  if (haveRating) {
    const topRatedFilms = films
      .sort((a, b) => b.rating - a.rating);
  } else {
    topRatedFilmsContainerElement.remove();
  }
  return haveRating;
};

const sortingFilmsByMostCommented = (films) => {
  const haveComments = films.some((film) => {
    return film.comments !== 0;
  });

  if (haveComments) {
    const mostCommentedFilms = films
      .sort((a, b) => b.commentsCount - a.commentsCount);
  } else {
    const mostCommentedElement = document.querySelector(`.films-list--extra:nth-child(3)`);
      mostCommentedFilmsContainerElement.remove();
  }
  return haveComments;
};

const headerElement = document.querySelector(`.header`);
render(headerElement, createUserRatingTemplate());

const mainElement = document.querySelector(`.main`);
const mainMenuCount = generateMainMenuCounts(films);
render(mainElement, createMainMenuTemplate(mainMenuCount));
render(mainElement, createSortMenuTemplate());
render(mainElement, createFilmsContainerTemplate());

const filmsListElement = document.querySelector(`.films-list`);
const filmListContainerElement = filmsListElement.querySelector(`.films-list__container`);

renderManyTemplates(FILM_LIST_COUNT, filmListContainerElement, films);

const topRatedFilmListContainerElement = document
  .querySelector(`.films-list--extra:nth-child(2) > .films-list__container`);
const mostCommentedFilmsContainerElement = document
  .querySelector(`.films-list--extra:nth-child(3) > .films-list__container`);

if (sortingFilmsByRating(films)) {
  renderManyTemplates(FILM_EXTRA_LIST_COUNT, topRatedFilmListContainerElement, films);
}
if (sortingFilmsByMostCommented(films)) {
  renderManyTemplates(FILM_EXTRA_LIST_COUNT, mostCommentedFilmsContainerElement, films);
}

render(filmsListElement, createShowMoreButtonTemplate());

let showingFilmsCount = FILM_LIST_COUNT;

const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

showMoreButton.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount += SHOWING_FILMS_BY_BUTTON_COUNT;
  films.slice(prevFilmsCount, showingFilmsCount).forEach((film) => {
    render(filmListContainerElement, createFilmCardTemplate(film));
  });

  if (showingFilmsCount > films.length) {
    showMoreButton.remove();
  }
});

render(mainElement, createStatisticContainerTemplate());

const statisticElement = mainElement.querySelector(`.statistic`);
render(statisticElement, createStatisticRankTemplate());
render(statisticElement, createStatisticFiltersTemplate());
render(statisticElement, createStatisticTextListTemplate());
render(statisticElement, createStatisticChartTemplate());

const footerMovieStatistic = document.querySelector(`.footer__statistics p`);
footerMovieStatistic.textContent = `${films.length} movies inside`;

const bodyElement = document.querySelector(`body`);
render(bodyElement, createFilmPopupTemplate(films[0]));

const popup = bodyElement.querySelector(`.film-details`);
const popupRemoveButton = popup.querySelector(`.film-details__close-btn`);
popupRemoveButton.addEventListener(`click`, () => {
  popup.remove();
});
