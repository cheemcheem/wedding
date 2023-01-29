import React from 'react';
import { Grid, GridColumn } from '@jpmorganchase/uitk-grid';
import { Timing, timings } from '@wedding/data';

export const Timings: React.FC = () => {
  return (
    <Grid<Timing>
      rowData={timings}
      style={{ height: '1000px', pointerEvents: 'none' }}
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
