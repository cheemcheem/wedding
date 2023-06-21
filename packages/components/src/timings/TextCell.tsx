import React from 'react';
import { Text } from '@salt-ds/core';
import { GridColumnProps } from '@salt-ds/data-grid';

export const TextCell: GridColumnProps['cellValueComponent'] = ({ value }) => (
  <Text style={{ paddingLeft: '1rem' }}>{value}</Text>
);
