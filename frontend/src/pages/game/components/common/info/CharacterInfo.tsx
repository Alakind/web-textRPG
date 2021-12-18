import React from 'react';
import './info.css';
import { HealthBar } from '../bars/HealthBar';
import { ManaBar } from '../bars/ManaBar';

interface Props {
    name: string;
    classType: string;
    race: string;
    level: number;
    exp: number;
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
}

export function CharacterInfo({
  name, classType, race, level, exp, health, maxHealth, mana, maxMana,
}: Props) {
  return (
    <span className="characterInfo">
      <h3>{name}</h3>
      <HealthBar health={health} maxHealth={maxHealth} />
      <ManaBar mana={mana} maxMana={maxMana} />
      <p>
        Level:
        {' '}
        {level}
      </p>
      <p>
        Exp:
        {' '}
        {exp}
      </p>
      <p>
        Class:
        {' '}
        {classType}
      </p>
      <p>
        Race:
        {' '}
        {race}
      </p>
    </span>
  );
}
