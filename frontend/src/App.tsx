import React from 'react';
import {
  InputPanel, CharacterPanel, StatusPanel, JournalPanel,
} from './pages/game/components/panels';
import { SwitchPanelContainer } from './pages/game/containers/panels/SwitchPanelContainer';

function App() {
  return (
    <div>
      <SwitchPanelContainer
        firstComponent={CharacterPanel}
        secondComponent={JournalPanel}
        firstName="Character"
        secondName="Journal"
      />
      <InputPanel />
      <StatusPanel />
    </div>
  );
}

export default App;
