import { combineReducers } from 'redux';

import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { registration } from './registration.reducer';
import { authentication } from './authentication.reducer';
import { category, categories } from './categories.reducer';
import { detail } from './detail.reducer';
import { mangas, manga } from './mangas.reducer';
import { chapters, chapter } from './chapters.reducer';
import { follows } from './follows.reducer';
import { likes } from './likes.reducer';
import { historys } from './historys.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  category,
  categories,
  detail,
  mangas, 
  manga,
  chapters,
  chapter,
  follows, likes,
  historys
});

export default rootReducer;