import React from 'react';
import { TerminalOutputContainer } from '../../containers/terminal';
import './panels.css';

export function InputPanel() {
  return (
    <div className="bottomPanel">
      <h3>Input panel</h3>
      <TerminalOutputContainer />
    </div>
  );
}
