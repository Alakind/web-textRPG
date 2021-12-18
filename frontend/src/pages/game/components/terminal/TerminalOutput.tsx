import React from 'react';

interface Props {
  text: string,
}

export function TerminalOutput({ text } : Props) {
  return (
    <span>
      <p>{text}</p>
    </span>
  );
}
