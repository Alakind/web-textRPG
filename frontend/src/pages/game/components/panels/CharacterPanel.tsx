import React from 'react';
import { playerMock } from '../../../../util/mocks';
import './panels.css';

export function CharacterPanel() {
  const character = playerMock;

  return (
    <div className="tabPanel">
      <h3>Character panel</h3>
      <h3>{character.name}</h3>
    </div>
  );
}
