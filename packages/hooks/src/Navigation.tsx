import React, { useState } from 'react';
import { FlowLayout } from '@salt-ds/core';
import { Dropdown, Tabstrip, Panel } from '@salt-ds/lab';
import { useMatchMediaQuery } from '@wedding/hooks';
import './Navigation.css';
import { useSmallMode } from './useSmallMode';

export type NavigationProps<T extends string> = {
  locations: Map<T, React.FC>;
  active: T;
  setActive: (location: T) => void;
};

export const Navigation = <T extends string>({
  active,
  locations,
  setActive,
}: NavigationProps<T>): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const keys = Array.from(locations.keys());
  const smallMode = useSmallMode();
  const isTouchScreen = !useMatchMediaQuery('(hover: hover)');
  return smallMode ? (
    <Panel
      variant={open ? 'secondary' : 'primary'}
      style={{
        padding: 0,
        height: 'var(--saltTabs-tabstrip-height, var(--salt-size-stackable))',
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
              'var(--saltTabs-tabstrip-height, var(--salt-size-stackable))',
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
