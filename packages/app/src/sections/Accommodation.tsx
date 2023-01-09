import React, { useMemo, useRef } from 'react';
import { Card, Panel, StackLayout, H2, H3 } from '@jpmorganchase/uitk-core';
import { StudentHalls, StudentHall, HotelListItem } from '@wedding/components';
import { List } from '@jpmorganchase/uitk-lab';
import { UserGroupSolidIcon, UserSolidIcon } from '@jpmorganchase/uitk-icons';

export const Accommodation: React.FC = () => {
  return (
    <Panel>
      <StackLayout>
        <StackLayout>
          {/* <H2 styleAs="h1">St Andrews Accommodation</H2> */}
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
                  <StudentHall
                    email="agnes.blackadder@st-andrews.ac.uk"
                    name="Agnes Blackadder Hall"
                    type="B&B ensuite double beds"
                    prices={[
                      {
                        discountPercent: 10,
                        icon: [UserSolidIcon],
                        price: 65,
                        title: 'Single Occupancy',
                      },
                      {
                        discountPercent: 10,
                        icon: [UserGroupSolidIcon],
                        price: 85,
                        title: 'Double Occupancy',
                      },
                      {
                        icon: [UserGroupSolidIcon, UserGroupSolidIcon],
                        price: 120,
                        title: 'Twin (family) room',
                      },
                    ]}
                    telephone="01334467000"
                    website="https://ace.st-andrews.ac.uk/accommodation/david-russell-apartments"
                  />
                  <StudentHall
                    email="drareception@st-andrews.ac.uk"
                    name="David Russell Apartments"
                    type="B&B ensuite double beds"
                    prices={[
                      {
                        discountPercent: 10,
                        icon: [UserSolidIcon],
                        price: 65,
                        title: 'Single Occupancy',
                      },
                      {
                        discountPercent: 10,
                        icon: [UserGroupSolidIcon],
                        price: 85,
                        title: 'Double Occupancy',
                      },
                      {
                        icon: [
                          UserGroupSolidIcon,
                          UserGroupSolidIcon,
                          UserGroupSolidIcon,
                          UserGroupSolidIcon,
                          UserGroupSolidIcon,
                        ],
                        subtitle: 'Apartment of 5 bedrooms for 2 nights',
                        price: 365,
                        title: 'Occupancy for 5 to 10 people',
                      },
                    ]}
                    telephone="01334467100"
                    website="https://ace.st-andrews.ac.uk/accommodation/david-russell-apartments"
                  />
                </StudentHalls>
              </StackLayout>
            </StackLayout>
          </Card>
          <Card>
            <StackLayout gap={2}>
              <H3 styleAs="h2">St Andrews Hotels</H3>
              {/* TODO: If time, add sorting for street or closest to ceremony, reception, pub */}
              {/* prettier-ignore */}
              <List borderless  displayedItemCount={-1} >
                  <HotelListItem  name="Ardgowan Hotel"                             url="https://www.ardgowanhotel.co.uk"/>
                  <HotelListItem  name="Rusacks St Andrews"                         url="https://marineandlawn.com/rusacksstandrews"/>
                  <HotelListItem  name="The Old Course Hotel"                       url="https://www.oldcoursehotel.co.uk"/>
                  <HotelListItem  name="The Albany Hotel"                           url="https://www.albanyhotelstandrews.co.uk/"/>
                  <HotelListItem  name="Hotel Du Vin"                               url="https://www.hotelduvin.com/locations/st-andrews"/>
                  <HotelListItem  name="Greyfriars Hotel"                           url="https://www.greenekinginns.co.uk/hotels/greyfriars-hotel"/>
                  <HotelListItem  name="Kinnettles Hotel"                           url="https://kinnettleshotel.com"/>
                  <HotelListItem  name="Scores Hotel"                               url="https://www.thescoreshotel.co.uk/"/>
                  <HotelListItem  name="The Dunvegan Hotel"                         url="https://www.dunvegan-hotel.com/contact-us"/>
                  <HotelListItem  name="Cleveden House"                             url="https://www.dunvegan-hotel.com/contact-us"/>
                  <HotelListItem  name="Annandale Guest House"                      url="https://www.annandale-standrews.com"/>
                  <HotelListItem  name="No.1 St Andrews - St Mary&#39;s Place"      url="https://no1apartments.co.uk/st-andrews/st-marys-place"/>
                  <HotelListItem  name="No.1 Apartments St Andrews - South Street"  url="https://no1apartments.co.uk/st-andrews/south-street"/>
                  <HotelListItem  name="Rooms at the Saint"                         url="https://www.the-saint-bar.co.uk/bedrooms"/>
              </List>
            </StackLayout>
          </Card>
        </StackLayout>
      </StackLayout>
    </Panel>
  );
};
