import {
  StackLayout,
  Card,
  Button,
  FlowLayout,
} from '@jpmorganchase/uitk-core';
import React from 'react';
import { calendarAvailable, downloadCalendar, rsvpURL } from '@wedding/data';

export const Details: React.FC = () => {
  //    - (in order:) what/when/where/food/attendance button

  /* 
    - please rsvp here button
      - redirects to google form
    - Wedding Day Timings
      - Ceremony time & address
      - Reception time & address
        - Parts of the schedule we emailed old course
        - add in Ceilidh Band 
        - add in food set menu details 
        - add in dietary requirements will be accomodated in RSVP
    - ical downloads
  */
  return (
    <StackLayout>
      <StackLayout>
        <Card>
          <FlowLayout justify="end" align="center">
            <Button onClick={() => window.open(rsvpURL, '_blank')}>RSVP</Button>
          </FlowLayout>
          <FlowLayout justify="end" align="center">
            <Button disabled={!calendarAvailable} onClick={downloadCalendar}>
              Add to calendar
            </Button>
          </FlowLayout>
        </Card>
      </StackLayout>
    </StackLayout>
  );
};
