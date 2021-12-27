import React from 'react';
import './terminal.css';

interface Props {
  text: string[],
}

/* eslint-disable react/no-array-index-key */
export function TerminalOutput({ text } : Props) {
  return (
    <span className="terminalOutput">
      {text.map((row, index) => (<p key={index}>{row}</p>))}
    </span>
  );
}
