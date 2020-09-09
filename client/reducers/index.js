import { combineReducers } from 'redux';

import userReducer from './userReducer';
import readingReducer from './readingReducer';

const reducers = combineReducers({
  user: userReducer,
  reading: readingReducer,
});

export default reducers;
