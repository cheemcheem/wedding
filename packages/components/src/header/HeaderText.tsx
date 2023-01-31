import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from '@salt-ds/core';

export const HeaderText: React.FC<PropsWithChildren<TextProps<'div'>>> = ({
  children,
  ...rest
}) => {
  return (
    <Text
      style={{
        fontFamily: "'Dancing Script', cursive",
      }}
      styleAs="display2"
      children={children}
      {...rest}
    />
  );
};
