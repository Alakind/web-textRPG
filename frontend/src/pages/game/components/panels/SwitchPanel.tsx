import React from 'react';
import './panels.css';

interface Props {
    firstComponent: any,
    secondComponent: any,
    firstName: string,
    secondName: string,
    isFirstOpened: boolean,
    handleInactiveOpen: any,
}

export function SwitchPanel({
  firstComponent,
  secondComponent,
  firstName,
  secondName,
  isFirstOpened,
  handleInactiveOpen,
}: Props) {
  const FirstComponent = firstComponent;
  const SecondComponent = secondComponent;

  return (
    <span className="leftPanel">
      <span className="tabs">
        <button
          type="button"
          className={isFirstOpened ? 'activeTab' : 'inactiveTab'}
          onClick={isFirstOpened ? () => {} : handleInactiveOpen}
        >
          {firstName}
        </button>
        <button
          type="button"
          className={isFirstOpened ? 'inactiveTab' : 'activeTab'}
          onClick={isFirstOpened ? handleInactiveOpen : () => {}}
        >
          {secondName}
        </button>
      </span>
      <span>
        {isFirstOpened
          ? <FirstComponent />
          : <SecondComponent />}
      </span>
    </span>
  );
}
