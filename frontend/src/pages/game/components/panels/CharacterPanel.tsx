import React from 'react';
import { useSelector } from 'react-redux';
import './panels.css';
import { CharacterInfo } from '../common/info/CharacterInfo';
import { characterSelectors } from '../../../../ducks/character';

export function CharacterPanel() {
  const character = useSelector(characterSelectors.selectCharacter);

  return (
    <div className="tabPanel">
      <h3>Character panel</h3>
      {
      character
        ? (
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
        )
        : <div>Loading character info...</div>
      }
    </div>
  );
}
