import {
  FlowLayout,
  StackLayout,
  ToolkitProvider,
} from '@jpmorganchase/uitk-core';
import { Header } from './sections/Header';
import * as React from 'react';
import { useBackgroundColour } from '@wedding/hooks';
import { useNavigation } from './useNavigation';
// TODO: print button at bottom of pages

function App(): JSX.Element {
  useBackgroundColour();
  const { Active, Navigation } = useNavigation();
  return (
    <FlowLayout justify="center">
      <StackLayout style={{ width: 'min(100vw, 40rem)' }} gap={0}>
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
