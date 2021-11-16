import React from 'react';
import '../panels.css';

interface Props {
    firstComponent: any,
    secondComponent: any,
    firstName: string,
    secondName: string,
    isFirstOpened: boolean,
}

export function SwitchPanel({
  firstComponent,
  secondComponent,
  firstName,
  secondName,
  isFirstOpened,
}: Props) {
  let firstClass;
  let secondClass;
  if (isFirstOpened) {
    firstClass = 'activeTab';
    secondClass = 'inactiveTab';
  } else {
    secondClass = 'activeTab';
    firstClass = 'inactiveTab';
  }

  const FirstComponent = firstComponent;
  const SecondComponent = secondComponent;

  return (
    <span className="leftPanel">
      <span className="tabs">
        <span className={firstClass}>{firstName}</span>
        <span className={secondClass}>{secondName}</span>
      </span>
      <span>
        {firstComponent}
        {secondComponent}
        {isFirstOpened
          ? <FirstComponent />
          : <SecondComponent />}
      </span>
    </span>
  );
}
