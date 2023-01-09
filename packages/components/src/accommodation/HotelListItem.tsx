import { Text } from '@jpmorganchase/uitk-core';
import { Link, ListItem } from '@jpmorganchase/uitk-lab';
import React from 'react';

interface HotelListItemProps {
  name: string;
  url: string;
}

export const HotelListItem: React.FC<HotelListItemProps> = ({ name, url }) => {
  return (
    <ListItem
      style={{ padding: 0 }}
      children={
        <Link href={url} target="_blank" maxRows={1}>
          {name}
        </Link>
      }
    />
  );
};
