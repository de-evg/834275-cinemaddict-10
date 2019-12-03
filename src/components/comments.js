import {Comments, CommentAuthors} from '../mock/comments.js';
import {getRandomArrayItem} from './utils.js';

const createCommentTemplate = () => {

  const comment = getRandomArrayItem(Comments);
  const authorName = getRandomArrayItem(CommentAuthors);

  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">${comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${authorName}</span>
          <span class="film-details__comment-day">2019/12/31 23:59</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  );
};

export {createCommentTemplate};
