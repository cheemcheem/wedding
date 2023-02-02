import React, { useContext } from 'react';
import { H3, StackLayout, Text } from '@salt-ds/core';
import { List } from '@salt-ds/lab';
import { PrintContext, StackCard, TaxiListItem } from '@wedding/components';
import { PrintLink } from '@wedding/components/src/PrintLink';
import { taxis } from '@wedding/data';

export const OtherInformation: React.FC = () => {
  const { printButton } = useContext(PrintContext);

  return (
    <StackLayout>
      <StackCard>
        <H3 styleAs="h1">Dress Code</H3>
        <Text styleAs="h3">
          The wedding dress code is cocktail attire / semi&#8209;formal.
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Photography</H3>
        <Text styleAs="h3">
          St Salvator's Chapel prohibits personal photography and videography
          during wedding ceremonies.
        </Text>
        <Text styleAs="h3">
          Mobile phones should be switched off for the duration of the ceremony.
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Confetti</H3>
        <Text styleAs="h3">
          Confetti throwing is not allowed at St Salvator's Chapel. This also
          applies to rice and similar items.
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Parking</H3>
        <Text styleAs="h3">
          Please note that there is no parking available at St Salvator's
          Chapel.
        </Text>
        <Text styleAs="h3">
          Car parks in St Andrews town centre are{' '}
          <PrintLink
            styleAs="h3"
            target="_blank"
            href="https://www.fife.gov.uk/facilities/car-park/murray-place-car-park,-st-andrews"
            style={{ display: 'inline-block' }}
          >
            Murray&nbsp;Place
          </PrintLink>
          ,{' '}
          <PrintLink
            styleAs="h3"
            target="_blank"
            href="https://www.fife.gov.uk/facilities/car-park/st-marys-place-car-park,-st-andrews"
            style={{ display: 'inline-block' }}
          >
            St&nbsp;Mary's&nbsp;Place
          </PrintLink>{' '}
          and Argyle&nbsp;Street (
          <PrintLink
            styleAs="h3"
            target="_blank"
            href="https://www.fife.gov.uk/facilities/car-park/argyle-street-north-car-park,-st-andrews"
            style={{ display: 'inline-block' }}
          >
            North
          </PrintLink>
          {' / '}
          <PrintLink
            styleAs="h3"
            target="_blank"
            href="https://www.fife.gov.uk/facilities/car-park/argyle-street-south-car-park,-st-andrews"
            style={{ display: 'inline-block' }}
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
          {taxis.map((props) => (
            <TaxiListItem {...props} key={props.name} />
          ))}
        </List>
      </StackCard>

      <StackCard>
        <H3 styleAs="h1">Gifts</H3>
        <Text styleAs="h3">
          Please no gifts! The pleasure of your company is the only gift we hope
          for.
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Any Further Questions?</H3>
        <Text styleAs="h3">
          If you have any further questions, please{' '}
          <PrintLink
            styleAs="h3"
            prefix="mailto:"
            href="pergola_acacia_09@icloud.com"
            query="?subject=Katharine%20%26%20Kathan's%20Wedding%20Question"
          >
            contact&nbsp;us
          </PrintLink>
          .
        </Text>
      </StackCard>
      {printButton}
    </StackLayout>
  );
};
