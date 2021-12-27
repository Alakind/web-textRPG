import { characterTypes } from './types';

export const characterActions = {
  loadCharacter(id: number) {
    return {
      type: characterTypes.LOAD_CHARACTER,
      id,
    };
  },
  loadCharacterRequest(id: number) {
    return {
      type: characterTypes.LOAD_CHARACTER_REQUEST,
      id,
    };
  },
  loadCharacterSuccess(character: any) {
    return {
      type: characterTypes.LOAD_CHARACTER_SUCCESS,
      character,
    };
  },
  loadCharacterError(error: any) {
    return {
      type: characterTypes.LOAD_CHARACTER_ERROR,
      error,
    };
  },

  characterChangeHealth(healthDelta: number) {
    return {
      type: characterTypes.CHARACTER_CHANGE_HEALTH,
      healthDelta,
    };
  },
  characterChangeMana(manaDelta: number) {
    return {
      type: characterTypes.CHARACTER_CHANGE_MANA,
      manaDelta,
    };
  },
  characterChangeMoney(moneyDelta: number) {
    return {
      type: characterTypes.CHARACTER_CHANGE_MONEY,
      moneyDelta,
    };
  },
  characterChangeExp(expDelta: number) {
    return {
      type: characterTypes.CHARACTER_CHANGE_EXP,
      expDelta,
    };
  },
};
