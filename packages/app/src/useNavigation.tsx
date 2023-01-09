import React from 'react';
import { useSaveState } from '@wedding/hooks';
import { Navigation, NavigationProps } from './sections/Navigation';
import { Accommodation } from './sections/Accommodation';
import { AdditionalInfo } from './sections/AdditionalInfo';
import { Details } from './sections/Details';
import { Photos } from './sections/Photos';

const tabArray: [string, React.FC][] = [
  ['Details', Details],
  ['Accommodation', Accommodation],
  ['Additional Info', AdditionalInfo],
  ['Photos', Photos],
];
export const tabs = new Map(tabArray);

export const useNavigation = () => {
  const [activeTab, onActiveChange] = useSaveState<string>(
    'wedding-app-active-tab-dev=string',
    'Details',
  );

  const value: NavigationProps = {
    active: activeTab,
    locations: tabs,
    setActive: onActiveChange,
  };
  const ActiveComponent = tabs.get(activeTab) || (() => null);
  return {
    Navigation: () => <Navigation {...value} />,
    Active: () => <ActiveComponent />,
  };
};
