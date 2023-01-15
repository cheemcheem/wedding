import { FlowLayout } from '@jpmorganchase/uitk-core';
import { HeaderText } from '@wedding/components';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <FlowLayout align="center" justify="center" gap={0}>
      <HeaderText>Katharine</HeaderText>
      <HeaderText>&nbsp;</HeaderText>
      <HeaderText>&</HeaderText>
      <HeaderText>&nbsp;</HeaderText>
      <HeaderText>Kathan's</HeaderText>
      <HeaderText>&nbsp;</HeaderText>
      <HeaderText>Wedding</HeaderText>
    </FlowLayout>
  );
};
