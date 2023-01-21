import {
  Button,
  FlowLayout,
  Panel,
  StackLayout,
  ToolkitProvider,
  useBreakpoints,
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
  const { sm } = useBreakpoints();
  const width = useSmallMode() ? '100%' : sm;
  return (
    <FlowLayout justify="center">
      <StackLayout style={{ width }} gap={0} align="center">
        <Panel>
          <Header />
        </Panel>
        <ToolkitProvider density="touch">
          <Navigation />
        </ToolkitProvider>
        <StackLayout style={{ width }} gap={0}>
          <ToolkitProvider density="low">
            <Panel>
              <Active />
            </Panel>
          </ToolkitProvider>
        </StackLayout>
        {/* TODO: Make print button on all pages apart from photos */}
        {/* TODO: Make print button long */}
        <Button onClick={print}>PRINT</Button>
      </StackLayout>
    </FlowLayout>
  );
}

export default App;
