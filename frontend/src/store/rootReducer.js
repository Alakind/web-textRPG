import { combineReducers } from 'redux';
import { authReducer } from '../ducks/auth';
import { displayReducer } from '../ducks/display';

export default function createRootReducer() {
  return combineReducers({
    auth: authReducer,
    display: displayReducer,
  });
}
