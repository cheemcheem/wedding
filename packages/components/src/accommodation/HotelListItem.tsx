import { FlowLayout, H4, StackLayout } from '@jpmorganchase/uitk-core';
import { Link, ListItem } from '@jpmorganchase/uitk-lab';
import { useSmallMode } from '@wedding/hooks';
import React from 'react';

interface HotelListItemProps {
  name: string;
  url: string;
}

export const HotelListItem: React.FC<HotelListItemProps> = ({ name, url }) => {
  const isSmallMode = useSmallMode();
  const Item = isSmallMode ? (
    <StackLayout style={{ width: '100%' }} gap={0}>
      <Link href={url} target="_blank" styleAs="h4">
        {name}
      </Link>
    </StackLayout>
  ) : (
    <FlowLayout style={{ width: '100%' }} justify="space-between">
      <H4 style={{ margin: 0 }}>{name}</H4>
      <Link href={url} target="_blank">
        website
      </Link>
    </FlowLayout>
  );
  return <ListItem style={{ padding: 0 }}>{Item}</ListItem>;
};
