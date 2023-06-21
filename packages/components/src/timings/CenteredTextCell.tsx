import React from 'react';
import { StackLayout, Text } from '@salt-ds/core';
import { GridColumnProps } from '@salt-ds/data-grid';

export const CenteredTextCell: GridColumnProps['cellValueComponent'] = ({
  value,
}) => (
  <StackLayout align="center">
    <Text>{value}</Text>
  </StackLayout>
);
