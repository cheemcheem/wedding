import {
  Button,
  FlowLayout,
  Panel,
  Scrim,
  StackLayout,
  ToolkitProvider,
  useBreakpoints,
} from '@jpmorganchase/uitk-core';
import { Header } from './sections/Header';
import * as React from 'react';
import {
  useNavigation,
  useSmallMode,
  usePrint,
  useSmallerThan,
  smallModeBreakpoint,
} from '@wedding/hooks';
import { Accommodation } from './sections/Accommodation';
import { AdditionalInfo } from './sections/AdditionalInfo';
import { Details } from './sections/Details';
import { Photos } from './sections/Photos';
import { useContext } from 'react';
import { FontSizeContext, PrintContext } from '@wedding/components';
import { ButtonBar, OrderedButton } from '@jpmorganchase/uitk-lab';

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
  const { Active, Navigation } = useNavigation(tabs);

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
            <Header />
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
