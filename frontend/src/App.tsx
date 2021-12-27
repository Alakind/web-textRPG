import React, { useEffect } from 'react';
import { characterActions } from './ducks/character';
import {
  InputPanel, CharacterPanel, StatusPanel, JournalPanel,
} from './pages/game/components/panels';
import { SwitchPanelContainer } from './pages/game/containers/panels/SwitchPanelContainer';
import { store } from './store';

function App() {
  useEffect(() => {
    store.dispatch(characterActions.loadCharacter(0));
  }, []);

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
