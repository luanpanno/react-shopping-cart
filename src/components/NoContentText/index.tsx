import React from 'react';

import { Text } from './styles';

const NoContentText: React.FC = ({ children }) => {
  return <Text data-cy="no-content-text">{children}</Text>;
};

export default NoContentText;
