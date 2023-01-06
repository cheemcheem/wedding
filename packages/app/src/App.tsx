import {
  FlowLayout,
  Panel,
  StackLayout,
  ToolkitProvider,
} from '@jpmorganchase/uitk-core';
import { Header } from './sections/Header';
import * as React from 'react';
import { useBackgroundColour, useSaveState } from '@wedding/hooks';
import { Accommodation } from './sections/Accommodation';
import { AdditionalInfo } from './sections/AdditionalInfo';
import { EventDetails } from './sections/EventDetails';
import { ContentStatus, TabPanel, Tabs } from '@jpmorganchase/uitk-lab';
// TODO: print button at bottom of pages
function App(): JSX.Element {
  useBackgroundColour();
  const [activeTabIndex, onActiveChange] = useSaveState<number>(
    'wedding-app-active-tab',
    0,
  );
  return (
    <FlowLayout justify="center">
      <StackLayout style={{ width: '40rem' }} gap={0}>
        <Header />
        <ToolkitProvider density="touch">
          <Tabs centered {...{ activeTabIndex, onActiveChange }}>
            <TabPanel label="Details">
              <ToolkitProvider density="low">
                <EventDetails />
              </ToolkitProvider>
            </TabPanel>
            <TabPanel label="Accommodation">
              <ToolkitProvider density="low">
                <Accommodation />
              </ToolkitProvider>
            </TabPanel>
            <TabPanel label="Additional Info">
              <ToolkitProvider density="low">
                <AdditionalInfo />
              </ToolkitProvider>
            </TabPanel>
            <TabPanel label="Photos">
              <Panel>
                <ContentStatus
                  title="Coming Soon"
                  message="Please check here after the wedding to see photos from the wedding day!"
                  status="warning"
                />
              </Panel>
            </TabPanel>
          </Tabs>
        </ToolkitProvider>
      </StackLayout>
    </FlowLayout>
  );
}

export default App;
