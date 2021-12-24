import React from 'react';
import './terminal.css';

interface Props {
  text: string,
}

export function TerminalInput({ text } : Props) {
  return (
    <span className="terminalInput">
      <p>{text}</p>
    </span>
  );
}
