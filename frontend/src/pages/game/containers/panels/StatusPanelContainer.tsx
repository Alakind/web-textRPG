import React from 'react';
import { useSelector } from 'react-redux';
import { decisionsSelectors } from '../../../../ducks/decisions';
import { StatusPanel } from '../../components/panels';

export const StatusPanelContainer: React.FC = () => {
  const location: string = useSelector(decisionsSelectors.selectLocation);

  return (<StatusPanel location={location} />);
};
