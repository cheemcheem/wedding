import { ListItem } from '@jpmorganchase/uitk-lab';
import React from 'react';

interface HotelListItemProps {
  name: string;
  url: string;
}

export const HotelListItem: React.FC<HotelListItemProps> = ({ name, url }) => {
  return (
    <ListItem onClick={() => window.open(url, '_blank')} children={name} />
  );
};
