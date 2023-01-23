import React, { useState } from 'react';
import { FlowLayout, Panel } from '@jpmorganchase/uitk-core';
import { Dropdown, Tabstrip } from '@jpmorganchase/uitk-lab';
import { useMatchMediaQuery, useSaveState } from '@wedding/hooks';
import './Navigation.css';
import { useSmallMode } from './useSmallMode';

type NavigationProps = {
  locations: Map<string, React.FC>;
  active: string;
  setActive: (location: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({
  active,
  locations,
  setActive,
}) => {
  const [open, setOpen] = useState(false);
  const keys = Array.from(locations.keys());
  const smallMode = useSmallMode();
  const isTouchScreen = !useMatchMediaQuery('(hover: hover)');
  return smallMode ? (
    <Panel
      variant={open ? 'secondary' : 'primary'}
      style={{
        padding: 0,
        height: 'var(--uitkTabs-tabstrip-height, var(--uitk-size-stackable))',
      }}
    >
      <FlowLayout align="center" style={{ height: '100%' }}>
        <Dropdown
          isOpen={open}
          onOpenChange={setOpen}
          ListProps={{
            className: 'dropdown-from-top',
            ...(isTouchScreen
              ? {
                  onHighlight: (index) => {
                    if (index < 0) return;
                    setTimeout(() => {
                      setActive(Array.from(locations)[index][0]);
                      setOpen(false);
                    });
                  },
                  highlightedIndex: keys.indexOf(active),
                }
              : {}),
          }}
          className="dropdown-incremental-fade"
          source={keys}
          selected={active}
          onSelectionChange={(_, selected) =>
            selected && keys.indexOf(selected) >= 0 && setActive(selected)
          }
          width="100vw"
          style={{
            height:
              'var(--uitkTabs-tabstrip-height, var(--uitk-size-stackable))',
            display: 'flex',
            alignItems: 'center',
          }}
        />
      </FlowLayout>
    </Panel>
  ) : (
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
  );
};

type NavigationAndActive = {
  Navigation: React.FC;
  Active: React.FC;
};

export const useNavigation = (
  tabs: Map<string, React.FC>,
): NavigationAndActive => {
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
