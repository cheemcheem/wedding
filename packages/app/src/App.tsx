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

  const { xs, sm, md, lg, xl } = useBreakpoints();
  // const [width, setWidth] = React.useState<string | number>('100%');
  const width = useSmallMode() ? '100%' : md;

  const { setFontSize } = useContext(FontSizeContext);

  const smallerThanXS = useSmallerThan('xs');
  const smallerThanSM = useSmallerThan('sm');
  const smallerThanMD = useSmallerThan('md');
  const smallerThanLG = useSmallerThan('lg');
  const smallerThanXL = useSmallerThan('xl');

  React.useEffect(() => {
    if (smallerThanSM) {
      setFontSize('high');
      // setWidth('100%');
    } else if (smallerThanMD) {
      setFontSize('medium');
      // setWidth(md);
    } else if (smallerThanLG) {
      setFontSize('low');
      // setWidth(md);
    } else {
      setFontSize('touch');
    }
  }, [
    setFontSize,
    smallerThanXS,
    smallerThanSM,
    smallerThanMD,
    smallerThanLG,
    smallerThanXL,
  ]);
  const print = usePrint(printTabs);
  const { printMode } = useContext(PrintContext);
  // TODO: these buttons sometimes are disabled on touch screen
  //TODO: need to figure out positioning of these buttons
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
