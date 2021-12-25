import { characterTypes } from './types';

export const characterActions = {
  loadNewCharacter(id: number) {
    return {
      type: characterTypes.LOAD_NEW_CHARACTER,
      id,
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
