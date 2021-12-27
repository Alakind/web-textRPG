import { decisionsTypes } from './types';

const INITIAL_STATE = {
  location: 'road',
  output: ['You are feeling well'],
  options:
  [
    { text: 'Travel to the city', description: 'You are travelling to the city', destination: 'city' },
    { text: 'Set a camp', description: 'You are making a campfire and resting the night' },
  ],
};

export function decisionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case decisionsTypes.MAKE_DECISION:
      return {
        ...state,
        output: state.output.concat(action.option.description),
        location: action.option.destination ? action.option.destination : state.location,
      };
    case decisionsTypes.TRAVEL:
      return {
        ...state,
        location: action.destination,
      };
    default:
      return state;
  }
}
