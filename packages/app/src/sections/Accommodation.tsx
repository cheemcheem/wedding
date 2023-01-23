import React from 'react';
import { useContext } from 'react';
import { H3, StackLayout } from '@jpmorganchase/uitk-core';
import { List } from '@jpmorganchase/uitk-lab';
import {
  HotelListItem,
  PrintContext,
  StackCard,
  StudentHall,
  StudentHalls,
} from '@wedding/components';
import { halls, hotels } from '@wedding/data';

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
              <StudentHall {...props} key={props.name} />
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
          {hotels.map((props) => (
            <HotelListItem {...props} key={props.name} />
          ))}
        </List>
      </StackCard>
      {printButton}
    </StackLayout>
  );
};
