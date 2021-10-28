import { combineReducers } from 'redux';
import { authReducer } from '../ducks/auth';

export default function createRootReducer() {
  return combineReducers({
    auth: authReducer,
  });
}
