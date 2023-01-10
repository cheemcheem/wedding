import {
  FlowLayout,
  StackLayout,
  ToolkitProvider,
} from '@jpmorganchase/uitk-core';
import { Header } from './sections/Header';
import * as React from 'react';
import {
  useBackgroundColour,
  useNavigation,
  useSmallMode,
} from '@wedding/hooks';
import { Accommodation } from './sections/Accommodation';
import { AdditionalInfo } from './sections/AdditionalInfo';
import { Details } from './sections/Details';
import { Photos } from './sections/Photos';
// TODO: print button at bottom of pages

const tabs = new Map([
  ['Details', Details],
  ['Accommodation', Accommodation],
  ['Additional Info', AdditionalInfo],
  ['Photos', Photos],
]);

function App(): JSX.Element {
  useBackgroundColour();
  const { Active, Navigation } = useNavigation(tabs);
  const width = useSmallMode() ? '100vw' : '40rem';
  return (
    <FlowLayout justify="center">
      <StackLayout style={{ width }} gap={0}>
        <Header />
        <ToolkitProvider density="touch">
          <Navigation />
        </ToolkitProvider>
        <ToolkitProvider density="low">
          <Active />
        </ToolkitProvider>
      </StackLayout>
    </FlowLayout>
  );
}

export default App;
