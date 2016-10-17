import { combineReducers } from 'redux';
import commentReducer from './Comments';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
