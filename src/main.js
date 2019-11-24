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

const FILM_LIST_COUNT = 5;
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

/**
 * Рендерит разметку карточек
 *
 * @param {string} cardCount -  количество карточек для рендера
 * @param {object} container -  контейнер в который вставляется разметка
 * @param {opject} template - шаблон вставляемой разметки
 */
const renderCards = (cardCount, container, template) => {
  for (let i = 0; i < cardCount; i++) {
    render(container, template());
  }
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
renderCards(FILM_LIST_COUNT, filmListContainerElement, createFilmCardTemplate);

const filmListTopRatedElement = filmsContainerElement.querySelector(`.films-list--extra:nth-child(2) > .films-list__container`);
const filmListMostCommetedElement = filmsContainerElement.querySelector(`.films-list--extra:nth-child(3) > .films-list__container`);
renderCards(FILM_EXTRA_LIST_COUNT, filmListTopRatedElement, createFilmCardTemplate);
renderCards(FILM_EXTRA_LIST_COUNT, filmListMostCommetedElement, createFilmCardTemplate);

render(filmsListElement, createShowMoreButtonTemplate());

render(mainElement, createStatisticContainerTemplate());
const statisticElement = mainElement.querySelector(`.statistic`);
render(statisticElement, createStatisticRankTemplate());
render(statisticElement, createStatisticFiltersTemplate());
render(statisticElement, createStatisticTextListTemplate());
render(statisticElement, createStatisticChartTemplate());

const bodyElement = document.querySelector(`body`);
render(bodyElement, createFilmPopupTemplate());
