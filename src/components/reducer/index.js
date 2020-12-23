import { createStore, combineReducers } from 'redux';
import chess from './chess';
import chessMap from './map';
import enemyChess from './enemyChess';
const rootReducer = combineReducers({
  chess,
  chessMap,
  enemyChess
});
export const store = createStore(rootReducer);