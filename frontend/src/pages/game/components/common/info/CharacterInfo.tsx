import React from 'react';
import '../../../../../styles/common/info.css';
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
      <span>info</span>
      <HealthBar health={health} maxHealth={maxHealth} />
      <ManaBar mana={mana} maxMana={maxMana} />
    </span>
  );
}
