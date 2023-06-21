import React from 'react';
import { StackLayout } from '@salt-ds/core';
import { Tabstrip } from '@salt-ds/lab';
import { useSmallMode } from '@wedding/hooks';
import { DropDownNavigation } from './DropDownNavigation';
import './Navigation.css';
import { NavigationProps } from './NavigationProps';

export type { NavigationProps } from './NavigationProps';

export const Navigation = <T extends string>({
  active,
  locations,
  setActive,
}: NavigationProps<T>): React.ReactElement => {
  const keys = Array.from(locations.keys());
  const smallMode = useSmallMode();

  return smallMode ? (
    <DropDownNavigation {...{ active, locations, setActive }} />
  ) : (
    <StackLayout>
      <Tabstrip
        defaultSource={keys}
        centered
        {...{
          activeTabIndex: Array.from(locations)
            .map(([name]) => name)
            .indexOf(active),
          onActiveChange: (index) => setActive(Array.from(locations)[index][0]),
        }}
        overflowMenu={false}
      />
    </StackLayout>
  );
};
