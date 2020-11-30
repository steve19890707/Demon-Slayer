import { createStore, combineReducers } from 'redux';
import chess from './chess';
import map from './map';
const rootReducer = combineReducers({
  chess,
  map
});
export const store = createStore(rootReducer);