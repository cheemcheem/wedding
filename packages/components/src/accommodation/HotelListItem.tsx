import React from 'react';
import { FlexLayout, Link, StackLayout, Text } from '@salt-ds/core';
import { ListItem } from '@salt-ds/lab';
import { useSmallMode } from '@wedding/hooks';
import { PrintLink } from '../PrintLink';

export interface HotelListItemProps {
  name: string;
  url: string;
}

export const HotelListItem: React.FC<HotelListItemProps> = ({ name, url }) => {
  const isSmallMode = useSmallMode();
  const Item = isSmallMode ? (
    <StackLayout style={{ width: '100%' }} gap={0}>
      <Link href={url} target="_blank" styleAs="h3">
        {name}
      </Link>
    </StackLayout>
  ) : (
    <FlexLayout
      style={{ width: '100%' }}
      justify="space-between"
      wrap={false}
      align="center"
    >
      <Text styleAs="h3" maxRows={1}>
        {name}
      </Text>
      <PrintLink href={url} target="_blank" />
    </FlexLayout>
  );
  return <ListItem style={{ padding: 0, cursor: 'auto' }}>{Item}</ListItem>;
};
