import React from 'react';
import '../panels.css';

interface Props {
    firstComponent: React.ReactNode,
    secondComponent: React.ReactNode,
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

  return (
    <span className="leftPanel">
      <span className="tabs">
        <span className={firstClass}>{firstName}</span>
        <span className={secondClass}>{secondName}</span>
      </span>
      <span className="tabPanel">
        {isFirstOpened
          ? firstComponent
          : secondComponent}
      </span>
    </span>
  );
}
