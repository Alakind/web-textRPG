import React from 'react';
import {
  InputPanel, CharacterPanel, StatusPanel, JournalPanel,
} from './pages/game/panels';

function App() {
  return (
    <div>
      <InputPanel />
      <JournalPanel />
      <CharacterPanel />
      <StatusPanel />
    </div>
  );
}

export default App;
