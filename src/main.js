import {createMainMenuTemplate} from  './components/mainMenu.js';
import {createUserRatingTemplate} from  './components/userRating.js';
import {createFilmsContainerTemplate} from  './components/filmsContainer.js';
import {createFilmCardTemplate} from  './components/filmCard.js';
import {createSortMenuTemplate} from  './components/sortMenu.js';
import {createFilmPopupTemplate} from  './components/filmPopup.js';
import {createShowMoreButtonTemplate} from  './components/showMoreButton.js';
import {createStatisticContainerTemplate} from  './components/statisticContainer.js';
import {createStatisticFiltersTemplate} from  './components/statisticFilters.js';
import {createStatisticRankTemplate} from  './components/statisticRank.js';
import {createStatisticTextListTemplate} from  './components/statisticTextList.js';
import {createStatisticChartTemplate} from  './components/statisticChart.js';

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
