import React from 'react';
import { TerminalInputContainer, TerminalOutputContainer } from '../../containers/terminal';
import './panels.css';

export function InputPanel() {
  return (
    <div className="bottomPanel">
      <TerminalOutputContainer />
      <TerminalInputContainer />
    </div>
  );
}
