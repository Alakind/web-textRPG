import React from 'react';
import './terminal.css';
import { store } from '../../../../store';
import { decisionsActions } from '../../../../ducks/decisions';

interface Props {
  options: any[],
}

/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

export const TerminalInput: React.FC<Props> = ({ options }) => (
  <span className="terminalInput">
    <ul>
      {
        options.map(
          (option, index) => (
            <li
              onClick={() => { store.dispatch(decisionsActions.makeDecision(option)); }}
              key={index}
            >
              {option.text}
            </li>
          ),
        )
      }
    </ul>
  </span>
);
