import { StackLayout, H3, Text, Label } from '@jpmorganchase/uitk-core';
import { Link, List } from '@jpmorganchase/uitk-lab';
import { PrintContext, TaxiListItem, StackCard } from '@wedding/components';
import { PrintLink } from '@wedding/components/src/PrintLink';
import { taxis } from '@wedding/data';
import React, { useContext } from 'react';

export const AdditionalInfo: React.FC = () => {
  const { printButton } = useContext(PrintContext);

  return (
    <StackLayout>
      <StackCard>
        <H3 styleAs="h1">Dress Code</H3>
        <Text styleAs="h3">
          The wedding dress code is cocktail attire. Read more about the dress
          code{' '}
          <PrintLink
            href="https://www.brides.com/cocktail-attire-wedding-4844364"
            target="_blank"
            styleAs="h3"
          >
            here
          </PrintLink>
          .
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Photography</H3>
        <Text styleAs="h3">
          St Salvator's Chapel{' '}
          <Label
            styleAs="h3"
            style={{
              textDecoration: 'underline',
              color: 'var(--uitk-palette-error-foreground, red)',
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
              color: 'var(--uitk-palette-error-foreground, red)',
            }}
          >
            must
          </Label>{' '}
          be switched off for the duration of the ceremony.
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Confetti</H3>
        <Text styleAs="h3">
          Confetti throwing is{' '}
          <Label
            styleAs="h3"
            style={{
              textDecoration: 'underline',
              color: 'var(--uitk-palette-error-foreground, red)',
            }}
          >
            not
          </Label>{' '}
          allowed at St Salvator's Chapel. This also applies to rice and similar
          items.
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Parking</H3>
        <Text styleAs="h3">
          Please note that there is no parking available at St Salvator's
          Chapel. Car parking spaces outside the Chapel are reserved for the
          Bridal Party{' '}
          <Label
            styleAs="h3"
            style={{
              textDecoration: 'underline',
              color: 'var(--uitk-palette-error-foreground, red)',
            }}
          >
            only
          </Label>
          .
        </Text>
        <Text styleAs="h3">
          Car parks in St Andrews town centre are{' '}
          <PrintLink
            styleAs="h3"
            href="https://www.fife.gov.uk/facilities/car-park/murray-place-car-park,-st-andrews"
          >
            Murray&nbsp;Place
          </PrintLink>
          ,{' '}
          <PrintLink
            styleAs="h3"
            href="https://www.fife.gov.uk/facilities/car-park/st-marys-place-car-park,-st-andrews"
          >
            St&nbsp;Mary's&nbsp;Place
          </PrintLink>{' '}
          and Argyle&nbsp;Street (
          <PrintLink
            styleAs="h3"
            href="https://www.fife.gov.uk/facilities/car-park/argyle-street-north-car-park,-st-andrews"
          >
            North
          </PrintLink>
          {' / '}
          <PrintLink
            styleAs="h3"
            href="https://www.fife.gov.uk/facilities/car-park/argyle-street-south-car-park,-st-andrews"
          >
            South
          </PrintLink>
          ).
        </Text>
        <Text styleAs="h3">
          There is some street parking available on North Street, South Street
          and Market Street.
        </Text>
        <Text styleAs="h3">The Old Course Hotel has limited parking.</Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Taxis</H3>
        <List
          borderless
          displayedItemCount={-1}
          selected={[]}
          style={{ userSelect: 'text' }}
        >
          {taxis.map(TaxiListItem)}
        </List>
      </StackCard>

      <StackCard>
        <H3 styleAs="h1">Gifts</H3>
        <Text styleAs="h3">
          Please no gifts. Your presence is the only gift we need!
        </Text>
        <Text styleAs="h3">
          Consider donating instead to{' '}
          <PrintLink
            styleAs="h3"
            href="https://www.wateraid.org/uk"
            target="_blank"
          >
            WaterAid
          </PrintLink>
          .
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Contact us</H3>
        <Text styleAs="h3">
          If you have any further questions, please email us at{' '}
          <Link
            styleAs="h3"
            href="mailto:pergola_acacia_09@icloud.com?subject=Katharine%20%26%20Kathan's%20Wedding%20Question"
            style={{ wordBreak: 'break-all' }}
          >
            pergola_acacia_09@icloud.com
          </Link>
          .
        </Text>
      </StackCard>
      {printButton}
    </StackLayout>
  );
};
