import { combineReducers } from 'redux';
import chess from './chess';
import map from './map';
export default combineReducers({
  chess,
  map
});