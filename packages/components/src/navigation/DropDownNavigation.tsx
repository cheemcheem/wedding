import React, { useMemo, useState } from 'react';
import { Button, H1, Panel, StackLayout, Text } from '@salt-ds/core';
import { ChevronDownIcon } from '@salt-ds/icons';
import { Dropdown, ListItem } from '@salt-ds/lab';
import { useMatchMediaQuery } from '@wedding/hooks';
import { NavigationProps } from './NavigationProps';

export const DropDownNavigation = <T extends string>({
  active,
  locations,
  setActive,
}: NavigationProps<T>): React.ReactElement => {
  const keys = Array.from(locations.keys());
  const [open, setOpen] = useState(false);
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
  return (
    <StackLayout gap={0}>
      <Panel>
        <H1 styleAs="display2">{active}</H1>
      </Panel>
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
                Menu
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
    </StackLayout>
  );
};
