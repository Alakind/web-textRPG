import { characterTypes } from './types';

const INITIAL_STATE = {
  character: {
    id: -1,
    name: '',
    classType: '',
    race: '',
    level: -1,
    exp: -1,
    health: -1,
    maxHealth: 0,
    mana: -1,
    maxMana: 0,
    // TODO: SKILLBOOK
    money: -1,
    damage: -1,
    armorClass: -1,
  },
};

export function characterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case characterTypes.LOAD_CHARACTER_REQUEST:
      return {
        ...state,
        error: null,
      };
    case characterTypes.LOAD_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.character,
      };
    case characterTypes.LOAD_CHARACTER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case characterTypes.CHARACTER_CHANGE_HEALTH:
      return {
        ...state,
        health: state.health + action.healthDelta,
      };
    case characterTypes.CHARACTER_CHANGE_MANA:
      return {
        ...state,
        mana: state.mana + action.manaDelta,
      };
    case characterTypes.CHARACTER_CHANGE_MONEY:
      return {
        ...state,
        money: state.money + action.moneyDelta,
      };
    case characterTypes.CHARACTER_CHANGE_EXP:
      return {
        ...state,
        exp: state.exp + action.expDelta,
      };
    default:
      return state;
  }
}
