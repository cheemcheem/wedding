import React, { useMemo, useState } from 'react';
import { Button, Text } from '@salt-ds/core';
import { ChevronDownIcon } from '@salt-ds/icons';
import { Dropdown, ListItem, Panel, Tabstrip } from '@salt-ds/lab';
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
  const NavigationDropdownItem = useMemo(() => {
    const Component: typeof ListItem = ({ children, label, ...props }) => {
      return (
        <ListItem onClick={open ? () => setOpen(false) : undefined} {...props}>
          <Text styleAs="h3">
            {children}
            {label}
          </Text>
        </ListItem>
      );
    };
    return Component;
  }, [open]);
  return smallMode ? (
    <Panel
      variant={'secondary'}
      style={{
        padding: 0,
        '--saltButton-padding': '2rem',
        '--saltButton-height': 'calc(var(--salt-size-base) * 2)',
      }}
    >
      <Dropdown
        triggerComponent={
          <Button
            variant="secondary"
            className="saltDropdownButton saltDropdownButton-content"
          >
            <Text className="saltDropdownButton-buttonLabel" styleAs="h2">
              {active}
            </Text>{' '}
            <ChevronDownIcon />
          </Button>
        }
        isOpen={open}
        onOpenChange={setOpen}
        ListItem={NavigationDropdownItem}
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
      />
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
