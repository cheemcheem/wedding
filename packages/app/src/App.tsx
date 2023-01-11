import {
  Button,
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
  usePrint,
} from '@wedding/hooks';
import { Accommodation } from './sections/Accommodation';
import { AdditionalInfo } from './sections/AdditionalInfo';
import { Details } from './sections/Details';
import { Photos } from './sections/Photos';

const tabs = new Map([
  ['Details', Details],
  ['Accommodation', Accommodation],
  ['Additional Info', AdditionalInfo],
  ['Photos', Photos],
]);

const printTabs = new Map(
  Array.from(tabs).filter(([name]) => name !== 'Photos'),
);

function App(): JSX.Element {
  useBackgroundColour();
  const { Active, Navigation } = useNavigation(tabs);
  const print = usePrint(printTabs);
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
        <Button onClick={print}>PRINT</Button>
      </StackLayout>
    </FlowLayout>
  );
}

export default App;
