import React, { useContext } from 'react';
import { H3, StackLayout, Text } from '@jpmorganchase/uitk-core';
import { ButtonBar, Link, OrderedButton } from '@jpmorganchase/uitk-lab';
import { PrintContext, StackCard } from '@wedding/components';
import { PrintLink } from '@wedding/components/src/PrintLink';
import {
  ChapelAddress,
  ReceptionAddress,
  addressWithLineBreaks,
  calendarAvailable,
  downloadCalendar,
  rsvpURL,
} from '@wedding/data';
import { useSmallMode } from '@wedding/hooks';

export const Details: React.FC = () => {
  const { printButton, printMode } = useContext(PrintContext);

  const isSmallMode = useSmallMode();
  const buttons = (
    <>
      <OrderedButton
        align={isSmallMode ? undefined : 'left'}
        variant="cta"
        onClick={() => window.open(rsvpURL, '_blank')}
        style={{ width: '100%' }}
      >
        RSVP
      </OrderedButton>
      <OrderedButton disabled={!calendarAvailable} onClick={downloadCalendar}>
        Add to calendar
      </OrderedButton>
      {printButton}
    </>
  );

  return (
    <StackLayout>
      <Text styleAs="h1">Saturday 12th August 2023</Text>
      <StackCard>
        <H3 styleAs="h1">Wedding Ceremony</H3>
        <Text styleAs="h3">
          <Link
            styleAs="h3"
            href={ChapelAddress.url}
            target="_blank"
            aria-label="Maps Link"
            aria-details={`A link that will open up ${ChapelAddress.name} in Google or Apple Maps.`}
          >
            {addressWithLineBreaks(ChapelAddress.address)}
          </Link>
        </Text>
        <Text styleAs="h3">2:00pm - 3:00pm</Text>
        <Text styleAs="h3">
          All guests should arrive at the chapel between 1:30pm and 1:50pm.
          Guests who arrive later than 1:50pm will unfortunately be denied
          entry.
        </Text>
      </StackCard>
      <StackCard>
        <H3 styleAs="h1">Wedding Reception</H3>
        <Text styleAs="h3">
          <Link
            styleAs="h3"
            href={ReceptionAddress.url}
            target="_blank"
            aria-label="Maps Link"
            aria-details={`A link that will open up ${ReceptionAddress.name} in Google or Apple Maps.`}
          >
            {addressWithLineBreaks(ReceptionAddress.address)}
          </Link>
        </Text>
        <Text styleAs="h3">4:00pm - midnight</Text>
        <Text styleAs="h3">
          The Wedding Breakfast will be a set menu. Please indicate any dietary
          requirements you have (e.g. vegetarian, vegan, gluten free, nut
          allergy) on our RSVP form{' '}
          {printMode ? <PrintLink href={rsvpURL}>here</PrintLink> : 'below'}.
        </Text>
      </StackCard>
      {isSmallMode ? buttons : <ButtonBar>{buttons}</ButtonBar>}
    </StackLayout>
  );
};
