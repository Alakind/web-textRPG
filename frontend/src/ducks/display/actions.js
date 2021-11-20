import { displayTypes } from './types';

export const displayActions = {
  openJournalTab() {
    return {
      type: displayTypes.OPEN_JOURNAL_TAB,
    };
  },
  openCharacterTab() {
    return {
      type: displayTypes.OPEN_CHARACTER_TAB,
    };
  },
  switchTab() {
    return {
      type: displayTypes.SWITCH_TAB,
    };
  },
};
