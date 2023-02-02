import React, { useMemo } from 'react';
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
  const [unvalidatedActiveTab, onActiveChange] = useSaveState<T>(
    'wedding-app-active-tab',
    defaultTab,
  );

  const activeTab = useMemo(() => {
    if (tabs.has(unvalidatedActiveTab)) {
      return unvalidatedActiveTab;
    }
    onActiveChange(defaultTab);
    return defaultTab;
  }, [defaultTab, tabs, unvalidatedActiveTab, onActiveChange]);

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
