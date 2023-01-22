import { FlowLayout, Text, StackLayout } from '@jpmorganchase/uitk-core';
import { Link, ListItem } from '@jpmorganchase/uitk-lab';
import { useSmallMode } from '@wedding/hooks';
import React, { useContext } from 'react';
import { PrintContext } from '../PrintContext';
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
    <FlowLayout
      style={{ width: '100%' }}
      justify="space-between"
      wrap={false}
      align="center"
    >
      <Text styleAs="h3" maxRows={1}>
        {name}
      </Text>
      <PrintLink href={url} target="_blank" />
    </FlowLayout>
  );
  return <ListItem style={{ padding: 0, cursor: 'auto' }}>{Item}</ListItem>;
};
