import React from 'react';
import { Card, StackLayout, H3 } from '@jpmorganchase/uitk-core';
import { StudentHalls, StudentHall, HotelListItem } from '@wedding/components';
import { halls, hotels } from '@wedding/data';
import { List } from '@jpmorganchase/uitk-lab';
import { useSmallMode } from '@wedding/hooks';

export const Accommodation: React.FC = () => {
  const isSmallMode = useSmallMode();
  return (
    <StackLayout>
      <StackLayout>
        <Card>
          <StackLayout gap={2}>
            <H3 styleAs="h2">St Andrews University Halls</H3>
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
            <H3 styleAs="h2">St Andrews Hotels</H3>
            {/* TODO: If time, add sorting for street or closest to ceremony, reception, pub */}
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
