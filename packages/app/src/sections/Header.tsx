import { Panel, FlowLayout } from '@jpmorganchase/uitk-core';
import { Span } from '@jpmorganchase/uitk-lab';
import React from 'react';

const HeaderSpan = ({ children }: { children: string }) => {
  return (
    <Span
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
        <HeaderSpan>Katharine &</HeaderSpan>
        <HeaderSpan>Kathan's</HeaderSpan>
        <HeaderSpan>Wedding</HeaderSpan>
      </FlowLayout>
    </Panel>
  );
};
