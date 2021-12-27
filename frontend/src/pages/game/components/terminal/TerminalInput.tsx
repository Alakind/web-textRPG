import React from 'react';
import './terminal.css';

interface Props {
  options: object[],
}

/* eslint-disable react/no-array-index-key */
export const TerminalInput: React.FC<Props> = ({ options }) => (
  <span className="terminalInput">
    <ul>
      {options.map((option, index) => <li key={index}>{option}</li>)}
    </ul>
  </span>
);
