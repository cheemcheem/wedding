export interface Timing {
  eventName: string;
  startTime: string;
  endTime: string;
}

// prettier-ignore
export const timings: Timing[] = [
  { startTime: '13:30', endTime: '13:50', eventName: 'Arrive at Chapel' },
  { startTime: '14:00', endTime: '15:00', eventName: 'Ceremony' },
  { startTime: '16:00', endTime: '17:15', eventName: 'Drinks reception' },
  { startTime: '17:15', endTime: '17:45', eventName: 'Receiving line' },
  { startTime: '17:45', endTime: '19:30', eventName: 'Wedding Breakfast' },
  { startTime: '19:30', endTime: '19:50', eventName: 'Speeches' },
  { startTime: '19:50', endTime: '20:00', eventName: 'Band sound check' },
  { startTime: '20:00', endTime: '20:05', eventName: 'Cake cutting & first dance' },
  { startTime: '20:05', endTime: '21:30', eventName: 'Ceilidh dancing' },
  { startTime: '21:30', endTime: '22:00', eventName: 'Wedding cake served' },
  { startTime: '22:00', endTime: '00:00', eventName: 'Ceilidh dancing & DJ music' },
  { startTime: '00:00', endTime: '',      eventName: 'Bride & Groom depart, evening ends' },
];
