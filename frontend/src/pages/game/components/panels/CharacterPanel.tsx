import React from 'react';
import { playerMock } from '../../../../util/mocks';
import './panels.css';
import { CharacterInfo } from '../common/info/CharacterInfo';

export function CharacterPanel() {
  const character = playerMock;

  return (
    <div className="tabPanel">
      <h3>Character panel</h3>
      <CharacterInfo
        name={character.name}
        classType={character.classType}
        race={character.race}
        level={character.level}
        exp={character.exp}
        health={character.health}
        maxHealth={character.maxHealth}
        mana={character.mana}
        maxMana={character.maxMana}
      />
    </div>
  );
}
