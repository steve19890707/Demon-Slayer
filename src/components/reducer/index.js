import { createStore, combineReducers } from 'redux';
import chess from './chess';
import chessMap from './map';
const rootReducer = combineReducers({
  chess,
  chessMap
});
export const store = createStore(rootReducer);