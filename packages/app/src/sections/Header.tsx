import React from 'react';
import { Button, StackLayout, Text } from '@salt-ds/core';

type HeaderProps = { onClick: () => void };

export const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <StackLayout>
      <Button
        variant="secondary"
        onClick={onClick}
        style={{
          whiteSpace: 'revert',
          height: 'auto',
          textTransform: 'revert',
          letterSpacing: 'revert',
          padding: 0,
          margin: 0,
          '--button-background-hover': 'revert',
          '--button-text-color-hover': 'revert',
        }}
      >
        <Text
          style={{
            fontFamily: "'Dancing Script', cursive",
            textAlign: 'center',
          }}
          styleAs="display2"
          maxRows={3}
        >
          Katharine & Kathan's Wedding
        </Text>
      </Button>
    </StackLayout>
  );
};
