import React from 'react';
import { Button, FlowLayout, Text } from '@jpmorganchase/uitk-core';

type HeaderProps = { onClick: () => void };

export const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <FlowLayout align="center" justify="center" gap={0}>
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
    </FlowLayout>
  );
};
