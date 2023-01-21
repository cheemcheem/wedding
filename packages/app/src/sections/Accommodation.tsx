import React from 'react';
import { Card, StackLayout, H3, Text } from '@jpmorganchase/uitk-core';
import { StudentHalls, StudentHall, HotelListItem } from '@wedding/components';
import { halls, hotels } from '@wedding/data';
import { List } from '@jpmorganchase/uitk-lab';

export const Accommodation: React.FC = () => {
  return (
    <StackLayout>
      <StackLayout>
        <Card>
          <StackLayout gap={2}>
            <H3 styleAs="h1" style={{ marginTop: 0 }}>
              St Andrews University Halls
            </H3>
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
          </StackLayout>
        </Card>
        <Card>
          <StackLayout gap={2}>
            <H3 styleAs="h1" style={{ marginTop: 0 }}>
              St Andrews Hotels
            </H3>
            <List
              borderless
              displayedItemCount={-1}
              selected={[]}
              style={{ userSelect: 'text' }}
            >
              {hotels.map(HotelListItem)}
            </List>
          </StackLayout>
        </Card>
      </StackLayout>
    </StackLayout>
  );
};
