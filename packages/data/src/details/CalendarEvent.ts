import { ReturnObject, createEvent } from 'ics';
import download from 'js-file-download';
import {
  ChapelAddress,
  ReceptionAddress,
  addressWithNewLines,
} from './Addresses';

const description = `
13:30	-> 13:50	Arrive at Chapel
14:00	-> 15:00	Wedding Ceremony
15:15	Drinks Reception
16:45	Receiving Line
17:15	Speeches
17:45	Wedding Breakfast
19:45	Comfort Break
20:15	Cake Cutting 
20:30	Ceilidh Band
00:30	Bar Closes
01:00	Evening Ends


${ChapelAddress.name} Address: 
${addressWithNewLines(ChapelAddress.address)} 
${new URL(ChapelAddress.url).toString()}

${ReceptionAddress.name} Address: 
${addressWithNewLines(ReceptionAddress.address)} 
${new URL(ReceptionAddress.url).toString()}
`;

const event = createEvent({
  title: "Katharine & Kathan's Wedding",
  description,
  start: [2023, 8, 12, 13, 30],
  end: [2023, 8, 13, 1, 0],
  busyStatus: 'BUSY',
  location: 'St. Andrews, Scotland',
});

const isCalendarAvailable = (
  event: ReturnObject,
): event is { value: string } => {
  return Boolean(!event.error && event.value);
};

const calendarAvailable = isCalendarAvailable(event);
const downloadCalendar = calendarAvailable
  ? () => download(event.value, 'K&K Wedding Day', 'text/calendar')
  : () => undefined;

export { calendarAvailable, downloadCalendar };
