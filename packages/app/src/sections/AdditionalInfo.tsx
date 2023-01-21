import {
  Card,
  StackLayout,
  H2,
  H3,
  Text,
  H4,
  Label,
} from '@jpmorganchase/uitk-core';
import { Link, List } from '@jpmorganchase/uitk-lab';
import { TaxiListItem } from '@wedding/components';
import { taxis } from '@wedding/data';
import React from 'react';

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
      <Card>
        <StackLayout gap={2}>
          <H3 styleAs="h1" style={{ margin: 0 }}>
            Dress Code
          </H3>
          <Text styleAs="h3">
            The wedding dress code is cocktail attire. Read more about the dress
            code{' '}
            <Link
              href="https://www.brides.com/cocktail-attire-wedding-4844364"
              target="_blank"
              styleAs="h3"
            >
              here
            </Link>
            .
          </Text>
        </StackLayout>
      </Card>
      <Card>
        <StackLayout gap={2}>
          <H3 styleAs="h1" style={{ margin: 0 }}>
            Photography
          </H3>
          <Text styleAs="h3">
            St Salvator's Chapel{' '}
            <Label
              styleAs="h3"
              style={{
                textDecoration: 'underline',
                color: 'var(--uitk-palette-error-foreground)',
              }}
            >
              strictly
            </Label>{' '}
            prohibits personal photography and videography during wedding
            ceremonies.
          </Text>
          <Text styleAs="h3">
            Mobile phones{' '}
            <Label
              styleAs="h3"
              style={{
                textDecoration: 'underline',
                color: 'var(--uitk-palette-error-foreground)',
              }}
            >
              must
            </Label>{' '}
            be switched off for the duration of the ceremony.
          </Text>
        </StackLayout>
      </Card>
      <Card>
        <StackLayout gap={2}>
          <H3 styleAs="h1" style={{ margin: 0 }}>
            Confetti
          </H3>
          <Text styleAs="h3">
            Confetti throwing is{' '}
            <Label
              styleAs="h3"
              style={{
                textDecoration: 'underline',
                color: 'var(--uitk-palette-error-foreground)',
              }}
            >
              not
            </Label>{' '}
            allowed at St Salvator's Chapel. This also applies to rice and
            similar items.
          </Text>
        </StackLayout>
      </Card>
      <Card>
        <StackLayout gap={2}>
          <H3 styleAs="h1" style={{ margin: 0 }}>
            Parking
          </H3>
          <Text styleAs="h3">
            Please note that there is no parking available at St Salvator's
            Chapel. Car parking spaces outside the Chapel are reserved for the
            Bridal Party{' '}
            <Label
              styleAs="h3"
              style={{
                textDecoration: 'underline',
                color: 'var(--uitk-palette-error-foreground)',
              }}
            >
              only
            </Label>
            .
          </Text>
          <Text styleAs="h3">
            {/* TODO: Make all links blue by default */}
            {/* TODO: Link to car parks */}
            Car parks in St Andrews town centre are Murray Place, St Mary's
            Place and Argyle Street.
          </Text>
          <Text styleAs="h3">
            There is some street parking available on North Street, South Street
            and Market Street.
          </Text>
          <Text styleAs="h3">The Old Course Hotel has limited parking.</Text>
        </StackLayout>
      </Card>
      <Card>
        <H3 styleAs="h1" style={{ marginTop: 0 }}>
          Taxis
        </H3>
        <List
          borderless
          displayedItemCount={-1}
          selected={[]}
          style={{ userSelect: 'text' }}
        >
          {taxis.map(TaxiListItem)}
        </List>
        {/* prettier-ignore */}
        {/* <Grid<typeof taxis[number]> rowData={taxis} style={{height: '30rem'}}>
              <GridColumn<typeof taxis[number]> name='Taxi Company' defaultWidth={200} id='name' getValue={({name}) => name}/>
              <GridColumn<typeof taxis[number]> name='Phone Number' defaultWidth={150} id='number' getValue={({number}) => number}/>
            </Grid> */}
      </Card>

      <Card>
        <H3 styleAs="h1" style={{ marginTop: 0 }}>
          Gifts
        </H3>
        <H4 styleAs="h3">
          Please no gifts. Your presence is the only gift we need!
        </H4>
        <H4 styleAs="h3">
          Consider donating instead to{' '}
          <Link styleAs="h3" href="https://www.wateraid.org/uk" target="_blank">
            WaterAid
          </Link>
        </H4>
      </Card>
      <Card>
        <StackLayout gap={2}>
          <H3 styleAs="h1" style={{ margin: 0 }}>
            Contact us
          </H3>
          <Text styleAs="h3">
            If you have any further questions, please email us at //TODO: add
            anonymous email
          </Text>
        </StackLayout>
      </Card>
    </StackLayout>
  );
};
