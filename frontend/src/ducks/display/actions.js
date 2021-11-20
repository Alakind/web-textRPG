import { displayTypes } from './types';

export const displayActions = {
  open_journal_tab() {
    return {
      type: displayTypes.OPEN_JOURNAL_TAB,
    };
  },
  open_character_tab() {
    return {
      type: displayTypes.OPEN_CHARACTER_TAB,
    };
  },
  switch_tab() {
    return {
      type: displayTypes.SWITCH_TAB,
    };
  },
};
