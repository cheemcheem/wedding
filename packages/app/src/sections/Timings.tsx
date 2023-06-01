import React, { useContext } from 'react';
import { StackLayout } from '@salt-ds/core';
import { Grid, GridColumn } from '@salt-ds/data-grid';
import { PrintContext } from '@wedding/components';
import { Timing, timings } from '@wedding/data';
import { useSmallMode } from '@wedding/hooks';

export const Timings: React.FC = () => {
  const { printMode, printButton } = useContext(PrintContext);
  const isSmallMode = useSmallMode();
  if (printMode) {
    return (
      <table>
        <thead>
          <tr>
            {['Start Time', 'End Time', 'Event Name'].map((key) => (
              <th key={key} style={{ textAlign: 'left', paddingRight: '2ch' }}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timings.map(({ startTime, endTime, eventName }) => (
            <tr key={startTime}>
              <td>{startTime}</td>
              <td>{endTime}</td>
              <td>{eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <StackLayout>
      <StackLayout style={{ overflowX: 'scroll' }}>
        <Grid<Timing>
          rowData={timings}
          style={{
            height: 'var(--grid-total-height)',
            pointerEvents: 'none',
            width: isSmallMode ? 'var(--grid-total-width)' : undefined,
          }}
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
            defaultWidth={300}
            getValue={({ eventName }) => eventName}
          />
        </Grid>
      </StackLayout>
      {printButton}
    </StackLayout>
  );
};
