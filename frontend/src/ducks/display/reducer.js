import { displayTypes } from './types';

const INITIAL_STATE = {
  error: null,
  characterTabOpened: true,
};

export function displayReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case displayTypes.OPEN_CHARACTER_TAB:
      return {
        ...state,
        characterTabOpened: true,
      };
    case displayTypes.OPEN_JOURNAL_TAB:
      return {
        ...state,
        characterTabOpened: false,
      };
    case displayTypes.SWITCH_TAB:
      return {
        ...state,
        characterTabOpened: !state.characterTabOpened,
      };
    default:
      return state;
  }
}
