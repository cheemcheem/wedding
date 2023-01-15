import {
  FlexItem,
  FlowLayout,
  H4,
  StackLayout,
  Text,
} from '@jpmorganchase/uitk-core';
import { CallSolidIcon } from '@jpmorganchase/uitk-icons';
import { Link, ListItem } from '@jpmorganchase/uitk-lab';
import { useSmallMode } from '@wedding/hooks';
import React from 'react';

interface TaxiProps {
  name: string;
  number: string;
}

export const TaxiListItem: React.FC<TaxiProps> = ({ name, number }) => {
  const isSmallMode = useSmallMode();
  const Item = isSmallMode ? (
    <StackLayout style={{ width: '100%' }} gap={0}>
      <FlexItem align="start">
        <H4 style={{ margin: 0 }}>{name}</H4>
      </FlexItem>
      <FlexItem align="end">
        <FlowLayout align="center" gap={1}>
          <CallSolidIcon
            // @ts-ignore
            style={{ '--icon-color': 'var(--uitk-palette-success-foreground)' }}
          />
          <Text>
            <Link href={`tel:${number}`}>{number}</Link>
          </Text>
        </FlowLayout>
      </FlexItem>
    </StackLayout>
  ) : (
    <FlowLayout style={{ width: '100%' }} justify="space-between">
      <H4 style={{ margin: 0 }}>{name}</H4>
      <FlowLayout align="center" gap={1}>
        <CallSolidIcon
          // @ts-ignore
          style={{ '--icon-color': 'var(--uitk-palette-success-foreground)' }}
        />
        <Text>
          <Link href={`tel:${number}`}>{number}</Link>
        </Text>
      </FlowLayout>
    </FlowLayout>
  );
  return <ListItem style={{ padding: 0 }}>{Item}</ListItem>;
};
