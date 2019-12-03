
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
import {getRandomArrayItem} from './components/utils.js';
import {films} from './mock/film-card.js';

const FILM_LIST_COUNT = 5;
const SHOWING_FILMS_BY_BUTTON_COUNT = 5;
const FILM_EXTRA_LIST_COUNT = 2;

/**
 * Рендерит разметку
 *
 * @param {object} container -  контейнер в который вставляется разметка
 * @param {opject} template - шаблон вставляемой разметки
 */
const render = (container, template) => {
  container.insertAdjacentHTML(`beforeEnd`, template);
};

const renderManyTemplates = (cardCount, container, template, films) => {
  let showingFilmsCount = cardCount;
  films.slice(0, showingFilmsCount).forEach(
    (film) => {
      render(container, template(film));
    }
  );
};

const headerElement = document.querySelector(`.header`);
render(headerElement, createUserRatingTemplate());

const mainElement = document.querySelector(`.main`);
render(mainElement, createMainMenuTemplate());
render(mainElement, createSortMenuTemplate());
render(mainElement, createFilmsContainerTemplate());

const filmsContainerElement = mainElement.querySelector(`.films`);
const filmsListElement = filmsContainerElement.querySelector(`.films-list`);
const filmListContainerElement = filmsListElement.querySelector(`.films-list__container`);

renderManyTemplates(FILM_LIST_COUNT, filmListContainerElement, createFilmCardTemplate, films);


const filmListTopRatedElement = filmsContainerElement
  .querySelector(`.films-list--extra:nth-child(2) > .films-list__container`);
const filmListMostCommetedElement = filmsContainerElement
  .querySelector(`.films-list--extra:nth-child(3) > .films-list__container`);

const haveRating = films.some((film) => {
  return film.rating !== 0
});

const haveComments = films.some((film) => {
  return film.comments !== 0
});
if (haveRating) {
  const topRatedFilms = films
    .slice()
    .sort((a, b) => b.rating - a.rating);
  renderManyTemplates(FILM_EXTRA_LIST_COUNT, filmListTopRatedElement, createFilmCardTemplate, topRatedFilms);
} else {
  const topRatedElement = filmsContainerElement
    .querySelector(`.films-list--extra:nth-child(2)`);
  topRatedElement.remove();
};

if (haveComments) {
  const mostCommentedFilms = films
    .slice()
    .sort((a, b) => b.comments - a.comments);
  renderManyTemplates(FILM_EXTRA_LIST_COUNT, filmListMostCommetedElement, createFilmCardTemplate, mostCommentedFilms);
} else {
  const topCommentedElement = filmsContainerElement
    .querySelector(`.films-list--extra:nth-child(3)`);
    topCommentedElement.remove();
};

render(filmsListElement, createShowMoreButtonTemplate());

render(mainElement, createStatisticContainerTemplate());
const statisticElement = mainElement.querySelector(`.statistic`);
render(statisticElement, createStatisticRankTemplate());
render(statisticElement, createStatisticFiltersTemplate());
render(statisticElement, createStatisticTextListTemplate());
render(statisticElement, createStatisticChartTemplate());

const siteFooter = document.querySelector(`.footer`);
const footerMovieStatistic = siteFooter.querySelector(`.footer__statistics p`);
footerMovieStatistic.textContent = `${films.length} movies inside`;

const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);
let showingFilmsCount = FILM_LIST_COUNT;
showMoreButton.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount += SHOWING_FILMS_BY_BUTTON_COUNT;
  films.slice(prevFilmsCount, showingFilmsCount).forEach((film) => {
    render(filmListContainerElement, createFilmCardTemplate(film));
  });

  if (showingFilmsCount > films.length) {
    showMoreButton.remove();
  };
});

const bodyElement = document.querySelector(`body`);
render(bodyElement, createFilmPopupTemplate(films[0]));

const popup = bodyElement.querySelector(`.film-details`);
const commentsList = popup.querySelector(`.film-details__comments-list`);
for (let i = 0; i < films[0].comments; i++) {
  render(commentsList, createCommentTemplate());
}
