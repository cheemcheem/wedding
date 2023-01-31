import * as React from 'react';
import { useContext } from 'react';
import { FlowLayout, StackLayout, useBreakpoints } from '@salt-ds/core';
import { OrderedButton, Panel } from '@salt-ds/lab';
import { FontSizeContext, PrintContext } from '@wedding/components';
import {
  smallModeBreakpoint,
  useNavigation,
  usePrint,
  useSmallMode,
  useSmallerThan,
} from '@wedding/hooks';
import { Accommodation } from './sections/Accommodation';
import { AdditionalInfo } from './sections/AdditionalInfo';
import { Details } from './sections/Details';
import { Header } from './sections/Header';
import { Photos } from './sections/Photos';
import { Timings } from './sections/Timings';

const tabs = new Map([
  ['Details', Details],
  ['Timings', Timings],
  ['Accommodation', Accommodation],
  ['Additional Info', AdditionalInfo],
  ['Photos', Photos],
] as const);

const printTabs = new Map(
  Array.from(tabs).filter(([name]) => name !== 'Photos'),
);

function App(): JSX.Element {
  const { Active, Navigation, navigateTo } = useNavigation(tabs, 'Details');

  const breakpoints = useBreakpoints();
  const smallerThanSM = useSmallerThan('sm');
  const smallerThanMD = useSmallerThan('md');
  const width = useSmallMode() ? '100%' : breakpoints[smallModeBreakpoint];

  const { setFontSize } = useContext(FontSizeContext);

  React.useEffect(() => {
    if (smallerThanSM) {
      setFontSize('high');
    } else if (smallerThanMD) {
      setFontSize('medium');
    } else {
      setFontSize('low');
    }
  }, [setFontSize, smallerThanSM, smallerThanMD]);
  const print = usePrint(printTabs);
  const { printMode } = useContext(PrintContext);

  return (
    <PrintContext.Provider
      value={{
        printButton: <OrderedButton onClick={print}>PRINT</OrderedButton>,
        printMode,
      }}
    >
      <FlowLayout justify="center">
        <StackLayout style={{ width }} gap={0} align="center">
          <Panel>
            <Header onClick={() => navigateTo('Details')} />
          </Panel>
          <Navigation />
          <StackLayout style={{ width }} gap={0}>
            <Panel>
              <Active />
            </Panel>
          </StackLayout>
        </StackLayout>
      </FlowLayout>
    </PrintContext.Provider>
  );
}

export default App;
