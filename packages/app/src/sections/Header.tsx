import { Panel, FlowLayout, Text } from '@jpmorganchase/uitk-core';
import React from 'react';

const HeaderText = ({ children }: { children: string }) => {
  return (
    <Text
      style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '4rem',
        lineHeight: '4rem',
      }}
      children={children}
    />
  );
};

export const Header: React.FC = () => {
  return (
    <Panel>
      <FlowLayout align="center" justify="center" gap={0}>
        <HeaderText>Katharine</HeaderText>
        <HeaderText>&nbsp;</HeaderText>
        <HeaderText>&</HeaderText>
        <HeaderText>&nbsp;</HeaderText>
        <HeaderText>Kathan's</HeaderText>
        <HeaderText>&nbsp;</HeaderText>
        <HeaderText>Wedding</HeaderText>
      </FlowLayout>
    </Panel>
  );
};
