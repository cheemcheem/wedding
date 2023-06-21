export interface Timing {
  eventName: string;
  startTime: string;
  endTime: string;
}

// prettier-ignore
export const timings: Timing[] = [
  { startTime: '13:30', endTime: '13:50', eventName: 'Arrive at Chapel' },
  { startTime: '14:00', endTime: '15:00', eventName: 'Ceremony' },
  { startTime: '16:00', endTime: '17:30', eventName: 'Drinks reception' },
  { startTime: '17:30', endTime: '20:00', eventName: 'Wedding Breakfast' },
  { startTime: '20:00', endTime: '21:30', eventName: 'Ceilidh dancing' },
  { startTime: '21:30', endTime: '22:00', eventName: 'Wedding cake served' },
  { startTime: '22:00', endTime: '00:00', eventName: 'Ceilidh dancing & DJ' },
  { startTime: '00:00', endTime: '',      eventName: 'Carriages' },
];
