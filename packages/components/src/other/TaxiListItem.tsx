import React, { useContext } from 'react';
import { FlexLayout, FlowLayout, Text } from '@salt-ds/core';
import { CallSolidIcon } from '@salt-ds/icons';
import { ListItem } from '@salt-ds/lab';
import { useSmallMode } from '@wedding/hooks';
import { PrintContext } from '../PrintContext';
import { PrintLink } from '../PrintLink';

interface TaxiProps {
  name: string;
  number: string;
}

export const TaxiListItem: React.FC<TaxiProps> = ({ name, number }) => {
  const isSmallMode = useSmallMode();
  const { printMode } = useContext(PrintContext);
  const href = `tel:${number}`;

  const Item = (
    <FlexLayout
      style={{ width: '100%' }}
      align="center"
      justify="space-between"
      wrap={false}
      gap={1}
    >
      <Text styleAs="h3">{name}</Text>
      <FlowLayout gap={1}>
        <CallSolidIcon
          style={{
            '--icon-color': 'var(--salt-palette-success-foreground)',
          }}
        />
        {!isSmallMode &&
          (printMode ? (
            <PrintLink prefix="tel:" href={number} />
          ) : (
            <Text>{number}</Text>
          ))}
      </FlowLayout>
    </FlexLayout>
  );
  return (
    <ListItem
      onClick={isSmallMode ? () => window.open(href, '_self') : undefined}
      style={{ padding: 0, cursor: 'auto' }}
      itemHeight="100%"
    >
      {Item}
    </ListItem>
  );
};
