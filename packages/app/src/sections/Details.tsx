import {
  Panel,
  StackLayout,
  Card,
  Button,
  ButtonProps,
  FlowLayout,
} from '@jpmorganchase/uitk-core';
import download from 'js-file-download';
import { createEvent } from 'ics';
import React from 'react';

const description = `
13:30	-> 14:00	Wedding Guest Arrival
14:00	-> 15:00	Ceremony
15:15	-> 16:30	Reception
17:45	-> 19:45	Wedding Breakfast
20:45	-> 21:00	First Dance
00:00	-> 01:00	Evening Ends
`;

const { error, value } = createEvent({
  title: "Katharine & Kathan's Wedding",
  description,
  start: [2023, 8, 12, 14, 0],
  end: [2023, 8, 13, 1, 0],
  busyStatus: 'BUSY',
  location: 'St. Andrews, Scotland',
});

const formUrl = 'https://forms.gle/8iYoPMappLjfHar59';

type ResponseButtonProps = Pick<
  ButtonProps,
  'children' | 'onClick' | 'disabled'
>;
const ResponseButton: React.FC<ResponseButtonProps> = Button;
const downloadCalendar = () =>
  download(value || '', 'K&K Wedding Day', 'text/calendar');
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
    <Panel>
      <StackLayout>
        <StackLayout>
          <Card>
            <FlowLayout justify="end" align="center">
              <ResponseButton onClick={() => window.open(formUrl, '_blank')}>
                RSVP
              </ResponseButton>
            </FlowLayout>
            <FlowLayout justify="end" align="center">
              <ResponseButton
                disabled={Boolean(error)}
                onClick={downloadCalendar}
              >
                Add to calendar
              </ResponseButton>
            </FlowLayout>
          </Card>
        </StackLayout>
      </StackLayout>
    </Panel>
  );
};
