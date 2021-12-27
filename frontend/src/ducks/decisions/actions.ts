import { decisionsTypes } from './types';

export const decisionsActions = {
  travel(destination: string) {
    return {
      type: decisionsTypes.TRAVEL,
      destination,
    };
  },
};
