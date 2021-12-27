import { combineReducers } from 'redux';
import { authReducer } from '../ducks/auth';
import { displayReducer } from '../ducks/display';
import { characterReducer } from '../ducks/character';

export default function createRootReducer() {
  return combineReducers({
    auth: authReducer,
    display: displayReducer,
    character: characterReducer,
  });
}
