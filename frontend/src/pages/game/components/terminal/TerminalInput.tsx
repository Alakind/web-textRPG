import React from 'react';
import './terminal.css';

interface Props {
  text: string,
}

export const TerminalInput: React.FC<Props> = ({ text }) => (
  <span className="terminalInput">
    <p>{text}</p>
  </span>
);
