import download from 'js-file-download';
import { createEvent, ReturnObject } from 'ics';

const description = `
13:30	-> 14:00	Wedding Guest Arrival
14:00	-> 15:00	Ceremony
15:15	-> 16:30	Reception
17:45	-> 19:45	Wedding Breakfast
20:45	-> 21:00	First Dance
00:00	-> 01:00	Evening Ends
`;

const event = createEvent({
  title: "Katharine & Kathan's Wedding",
  description,
  start: [2023, 8, 12, 14, 0],
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
