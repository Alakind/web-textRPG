import { decisionsTypes } from './types';

export const decisionsActions = {
  makeDecision(option: object) {
    return {
      type: decisionsTypes.MAKE_DECISION,
      option,
    };
  },

  travel(destination: string) {
    return {
      type: decisionsTypes.TRAVEL,
      destination,
    };
  },
};
