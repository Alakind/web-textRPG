import React from 'react';
import './terminal.css';

interface Props {
  text: string,
}

export function TerminalOutput({ text } : Props) {
  return (
    <span className="terminalOutput">
      <p>{text}</p>
    </span>
  );
}
