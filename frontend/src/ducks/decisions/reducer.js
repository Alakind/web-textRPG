import { decisionsTypes } from './types';

const INITIAL_STATE = {
  location: 'road',
};

export function decisionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case decisionsTypes.TRAVEL:
      return {
        ...state,
        location: action.destination,
      };
    default:
      return state;
  }
}
