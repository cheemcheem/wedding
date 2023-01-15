import React, { PropsWithChildren } from 'react';
import { Text } from '@jpmorganchase/uitk-core';

export const HeaderText: React.FC<PropsWithChildren> = ({ children }) => {
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
