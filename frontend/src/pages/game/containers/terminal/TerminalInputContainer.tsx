import React from 'react';
import { useSelector } from 'react-redux';
import { decisionsSelectors } from '../../../../ducks/decisions';
import { TerminalInput } from '../../components/terminal';

export function TerminalInputContainer() {
  const options = useSelector(decisionsSelectors.selectOptions);

  return (
    <TerminalInput options={options} />
  );
}
