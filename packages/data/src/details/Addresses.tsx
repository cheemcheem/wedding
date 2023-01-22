import React, { ReactElement } from 'react';

export interface Location {
  name: string;
  address: string[];
  url: string;
}

export const ChapelAddress: Location = {
  name: 'Chapel',
  address: [
    "St Salvator's Chapel",
    'University of St Andrews',
    'North Street',
    'St Andrews',
    'Scotland',
    'KY16 9AL',
  ],
  url: 'https://maps.apple.com/?address=University of St Andrews, North St, St. Andrews, KY16 9AL, Scotland&auid=8409595066129739522&lsp=9902&q=St Salvators Chapel',
};
export const ReceptionAddress: Location = {
  name: 'Reception',
  address: [
    'Old Course Hotel, Golf Resort & Spa',
    'Old Station Road',
    'St Andrews',
    'Scotland',
    'KY16 9SP',
  ],
  url: 'https://maps.apple.com/?address=Old Station Road, St. Andrews, KY16 9TB, Scotland&auid=10526026783350570776&lsp=9902&q=Old Course Hotel St Andrews',
};

export const addressWithLineBreaks = (
  address: Location['address'],
): ReactElement => {
  return address
    .map((a) => <>{a}</>)
    .reduce((a, b) => (
      <>
        {a}
        <br />
        {b}
      </>
    ));
};

export const addressWithNewLines = (address: Location['address']): string => {
  return address.reduce((a, b) => a + '\n' + b);
};
