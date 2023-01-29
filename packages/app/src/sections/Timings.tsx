import React from 'react';
import { Grid, GridColumn } from '@jpmorganchase/uitk-grid';

interface Timing {
  eventName: string;
  startTime: string;
  endTime: string;
}

// prettier-ignore
const timings: Timing[] = [
  { startTime: '13:30', endTime: '13:50', eventName: 'Arrive at Chapel' },
  { startTime: '14:00', endTime: '15:00', eventName: 'Ceremony' },
  { startTime: '16:00', endTime: '17:00', eventName: 'Drinks Reception' },
  { startTime: '17:00', endTime: '17:30', eventName: 'Receiving Line' },
  { startTime: '17:30', endTime: '19:30', eventName: 'Wedding Breakfast' },
  { startTime: '19:30', endTime: '19:50', eventName: 'Speeches' },
  { startTime: '19:50', endTime: '20:15', eventName: 'Break' },
  { startTime: '20:15', endTime: '20:30', eventName: 'Cake Cutting' },
  { startTime: '20:30', endTime: '21:30', eventName: 'Ceilidh Part 1' },
  { startTime: '21:30', endTime: '22:00', eventName: 'Break' },
  { startTime: '22:00', endTime: '23:00', eventName: 'Ceilidh Part 2' },
  { startTime: '23:00', endTime: '',      eventName: 'Bride and Groom depart' },
  { startTime: 'Midnight', endTime: '',   eventName: 'Final Carriages' },
];

export const Timings: React.FC = () => {
  return (
    <Grid<Timing>
      rowData={timings}
      style={{ height: '1000px' }}
      selectedRowIdxs={[]}
    >
      <GridColumn<Timing>
        id="startTime"
        name="Start Time"
        defaultWidth={90}
        getValue={({ startTime }) => startTime}
      />
      <GridColumn<Timing>
        id="endTime"
        name="End Time"
        defaultWidth={90}
        getValue={({ endTime }) => endTime}
      />
      <GridColumn<Timing>
        id="eventName"
        name="Event Name"
        defaultWidth={200}
        getValue={({ eventName }) => eventName}
      />
    </Grid>
  );
};
