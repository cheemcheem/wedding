import React, { PropsWithChildren } from 'react';
import { Text } from '@jpmorganchase/uitk-core';

export const HeaderText: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text
      style={{
        fontFamily: "'Dancing Script', cursive",
      }}
      styleAs="display2"
      children={children}
    />
  );
};
