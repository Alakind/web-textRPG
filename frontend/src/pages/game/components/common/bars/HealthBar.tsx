import React from 'react';
import './bars.css';

interface Props {
    health: number,
    maxHealth: number,
}

export function HealthBar({ health, maxHealth }: Props) {
  return (
    <svg className="bar">
      <rect className="healthBarOuter" />
      <rect className="healthBarInner" width={`${(health / maxHealth) * 100}%`} />
    </svg>
  );
}
