import { FlowLayout, Text } from '@jpmorganchase/uitk-core';
import { CallSolidIcon } from '@jpmorganchase/uitk-icons';
import { ListItem } from '@jpmorganchase/uitk-lab';
import { useSmallMode } from '@wedding/hooks';
import React from 'react';
import { ListItemWrapper } from '../common/ListItemWrapper';
interface TaxiProps {
  name: string;
  number: string;
}

export const TaxiListItem: React.FC<TaxiProps> = ({ name, number }) => {
  const isSmallMode = useSmallMode();
  const href = `tel:${number}`;

  const Item = (
    <FlowLayout style={{ width: '100%' }} justify="space-between">
      <Text styleAs="h3" style={{ margin: 0 }}>
        {name}
      </Text>
      <FlowLayout align="center" gap={1}>
        <CallSolidIcon
          style={{
            // @ts-ignore
            '--icon-color': 'var(--uitk-palette-success-foreground)',
          }}
        />
        {!isSmallMode && <Text>{number}</Text>}
      </FlowLayout>
    </FlowLayout>
  );
  return (
    <ListItem
      onClick={isSmallMode ? () => window.open(href, '_self') : undefined}
      // @ts-ignore
      style={{ padding: 0, cursor: 'auto' }}
    >
      <ListItemWrapper>{Item}</ListItemWrapper>
    </ListItem>
  );
};
