import { put } from '@redux-saga/core/effects';
import React from 'react';
import { useSelector } from 'react-redux';
import { displayActions, displaySelectors } from '../../../../ducks/display';
import { SwitchPanel } from '../../components/panels';

interface Props {
    firstComponent: any,
    secondComponent: any,
    firstName: string,
    secondName: string,
}

export function SwitchPanelContainer({
  firstComponent,
  secondComponent,
  firstName,
  secondName,
}: Props) {
  const isFirstOpened = useSelector(displaySelectors.selectCharacterTabOpened);

  const handleInactiveOpen = () => {
    console.log('hehe');
    put(displayActions.switchTab());
  };

  return (
    <SwitchPanel
      firstComponent={firstComponent}
      secondComponent={secondComponent}
      firstName={firstName}
      secondName={secondName}
      isFirstOpened={isFirstOpened}
      handleInactiveOpen={handleInactiveOpen}
    />
  );
}
