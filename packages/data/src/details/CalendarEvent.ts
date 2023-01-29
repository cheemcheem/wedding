import { ReturnObject, createEvent } from 'ics';
import download from 'js-file-download';
import {
  ChapelAddress,
  ReceptionAddress,
  addressWithNewLines,
} from './Addresses';
import { timings } from '../timings/Timings';

const descriptionTimings = timings
  .map(({ startTime, endTime, eventName }, index) => {
    if (endTime.length > 0) {
      return `${startTime} -> ${endTime} \t${eventName}`;
    }
    if (startTime.toLocaleLowerCase() === 'midnight') {
      startTime = '00:00';
    }
    return `${startTime}\t\t\t\t${eventName}`;
  })
  .reduce((a, b) => `${a}\n${b}`);
const description = `Timings:
${descriptionTimings}

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
  end: [2023, 8, 13, 0, 0],
  busyStatus: 'BUSY',
  location: 'St. Andrews, Scotland',
  url: window.location.href,
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
