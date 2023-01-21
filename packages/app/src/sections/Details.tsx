import { StackLayout, Card, H3, Text, Button } from '@jpmorganchase/uitk-core';
import React from 'react';
import { calendarAvailable, downloadCalendar, rsvpURL } from '@wedding/data';

export const Details: React.FC = () => {
  // TODO: Address hyperlink to google maps below
  return (
    <StackLayout>
      <StackLayout>
        <Text styleAs="h2">Saturday 12th August 2023</Text>
        <Card>
          <StackLayout gap={2}>
            <H3 styleAs="h1" style={{ margin: 0 }}>
              Wedding Ceremony
            </H3>
            <Text styleAs="h3">
              St Salvator's Chapel, University of St Andrews, North Street, St
              Andrews, KY16 9AL
            </Text>
            <Text styleAs="h3">2-3pm</Text>
            <Text styleAs="h3">
              All guests must arrive at the chapel between 1:30pm and 1:50pm.
              Guests who arrive later than 1:50pm will unfortunately be denied
              entry.
            </Text>
          </StackLayout>
        </Card>
        <Card>
          <StackLayout gap={2}>
            <H3 styleAs="h1" style={{ margin: 0 }}>
              Wedding Reception
            </H3>
            <Text styleAs="h3">
              Old Course Hotel, Golf Resort & Spa, Old Station Road, St Andrews,
              Scotland, KY16 9SP
            </Text>
            <Text styleAs="h3">3:15pm-1am</Text>
            <Text styleAs="h3">
              The Wedding Breakfast will consist of a pre-selected set menu.
              Please indicate any dietary requirements you have (e.g.
              vegetarian, vegan, gluten free, nut allergy) on our RSVP form
              below.
            </Text>
          </StackLayout>
        </Card>
        <Button onClick={() => window.open(rsvpURL, '_blank')}>
          Please RSVP here
        </Button>
        <Button disabled={!calendarAvailable} onClick={downloadCalendar}>
          Add to calendar
        </Button>
      </StackLayout>
    </StackLayout>
  );
};
