import React from 'react';
import './panels.css';

interface Props {
  location: string,
}

export const StatusPanel: React.FC<Props> = ({ location }) => (
  <div className="topPanel">
    <h3>
      Your location:
      {' '}
      {location}
    </h3>
    <img width="55%" src="./map.jpeg" alt="map" />
  </div>
);
