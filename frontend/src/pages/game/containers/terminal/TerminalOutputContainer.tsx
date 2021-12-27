import React from 'react';
import { useSelector } from 'react-redux';
import { decisionsSelectors } from '../../../../ducks/decisions';
import { TerminalOutput } from '../../components/terminal';

export function TerminalOutputContainer() {
  const text = useSelector(decisionsSelectors.selectOutput);

  console.log(text);
  return (
    <TerminalOutput text={text} />
  );
}
