import { Card, StackLayout, H2, H3, Text, H4 } from '@jpmorganchase/uitk-core';
import { Link, List } from '@jpmorganchase/uitk-lab';
import { TaxiListItem } from '@wedding/components';
import React from 'react';

const taxis = [
  { name: "St Andrews's Taxis", number: '01334 477272' },
  { name: 'Easy Taxi St Andrews', number: '07807 660069' },
  { name: 'St Andrews Taxi Services', number: '07878 707274' },
  { name: 'Golf City Taxis', number: '01334 477788' },
  { name: 'Club Cars St Andrews', number: '01334 479900' },
  { name: 'Platinum Cabs', number: '01334 754754' },
  { name: 'H M Taxis', number: '01334 474700' },
];

export const AdditionalInfo: React.FC = () => {
  /* Under additional info, have:
      - Timings are strict
      - Dress Code
      - photography
      - confetti
      - parking
      - st andrews taxi firms
      - gifts
      - Contact us (anonymous email address)
    Remove entire site from robots.txt
  */

  return (
    <StackLayout>
      <StackLayout>
        <H2 styleAs="h1">St Andrews Taxi Firms</H2>
        <Card>
          <H3 styleAs="h2">St Andrews Taxis</H3>
          <List
            borderless
            displayedItemCount={-1}
            selected={[]}
            highlightedIndex={-1}
          >
            {taxis.map(TaxiListItem)}
          </List>
          {/* prettier-ignore */}
          {/* <Grid<typeof taxis[number]> rowData={taxis} style={{height: '30rem'}}>
              <GridColumn<typeof taxis[number]> name='Taxi Company' defaultWidth={200} id='name' getValue={({name}) => name}/>
              <GridColumn<typeof taxis[number]> name='Phone Number' defaultWidth={150} id='number' getValue={({number}) => number}/>
            </Grid> */}
        </Card>
      </StackLayout>
      <StackLayout>
        <H2 styleAs="h1">Gifts</H2>
        <Card>
          <H3 styleAs="h2">Please no gifts</H3>
          <H4 styleAs="h3">Your presence is the only gift we need!</H4>
          <Text>
            Consider donating instead to{' '}
            <Link href="https://www.wateraid.org/uk" target="_blank">
              WaterAid
            </Link>
          </Text>
        </Card>
      </StackLayout>
    </StackLayout>
  );
};
