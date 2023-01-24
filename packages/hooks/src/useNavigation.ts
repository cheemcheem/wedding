import React from 'react';
import { useSaveState } from '@wedding/hooks';
import { Navigation, NavigationProps } from './Navigation';

type NavigationAndActive<T extends string> = {
  Navigation: React.FC;
  Active: React.FC;
  navigateTo: (location: T) => void;
};

export const useNavigation = <T extends string>(
  tabs: Map<T, React.FC>,
  defaultTab: T,
): NavigationAndActive<T> => {
  const [activeTab, onActiveChange] = useSaveState<T>(
    'wedding-app-active-tab',
    defaultTab,
  );

  const value: NavigationProps<T> = {
    active: activeTab,
    locations: tabs,
    setActive: onActiveChange,
  };

  const ActiveComponent = tabs.get(activeTab) || (() => null);

  return {
    Navigation: () => React.createElement(Navigation<T>, { ...value }),
    Active: () => React.createElement(ActiveComponent),
    navigateTo: () => onActiveChange(defaultTab),
  };
};
