import React from 'react';
import { StackLayout, H3 } from '@jpmorganchase/uitk-core';
import {
  StudentHalls,
  StudentHall,
  HotelListItem,
  PrintContext,
  StackCard,
} from '@wedding/components';
import { halls, hotels } from '@wedding/data';
import { List } from '@jpmorganchase/uitk-lab';
import { useContext } from 'react';

export const Accommodation: React.FC = () => {
  const { printButton } = useContext(PrintContext);
  return (
    <StackLayout>
      <StackCard>
        <H3 styleAs="h1">Halls</H3>
        <StackLayout
          style={{
            width:
              'calc(100% + 2 * var(--uitkCard-padding, calc(var(--uitk-size-unit) * 3)))',
            marginLeft:
              'calc(-1 * var(--uitkCard-padding, calc(var(--uitk-size-unit) * 3)))',
            marginBottom:
              'calc(-1 * var(--uitkCard-padding, calc(var(--uitk-size-unit) * 3)))',
          }}
        >
          <StudentHalls>
            {halls.map((props) => (
              <StudentHall {...props} />
            ))}
          </StudentHalls>
        </StackLayout>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Hotels</H3>
        <List
          borderless
          displayedItemCount={-1}
          selected={[]}
          style={{ userSelect: 'text' }}
        >
          {hotels.map(HotelListItem)}
        </List>
      </StackCard>
      {printButton}
    </StackLayout>
  );
};
