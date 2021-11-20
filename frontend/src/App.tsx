import React from 'react';
import {
  InputPanel, CharacterPanel, StatusPanel, JournalPanel, SwitchPanel,
} from './pages/game/components/panels';

function App() {
  return (
    <div>
      <SwitchPanel
        firstComponent={CharacterPanel}
        secondComponent={JournalPanel}
        firstName="Character"
        secondName="Journal"
        isFirstOpened
      />
      <InputPanel />
      <StatusPanel />
    </div>
  );
}

export default App;
