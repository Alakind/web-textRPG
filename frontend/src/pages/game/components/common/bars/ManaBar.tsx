import React from 'react';
import '../../../../../styles/common/bars.css';

interface Props {
    mana: number,
    maxMana: number,
}

export function ManaBar({ mana, maxMana }: Props) {
  return (
    <svg className="bar">
      <rect className="manaBarOuter" />
      <rect className="manaBarInner" width={`${(mana / maxMana) * 100}%`} />
    </svg>
  );
}
