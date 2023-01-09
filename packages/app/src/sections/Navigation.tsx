import { Panel } from '@jpmorganchase/uitk-core';
import { useMatchMediaQuery } from '@wedding/hooks';
import { Dropdown, Tabstrip } from '@jpmorganchase/uitk-lab';
import React, { useState } from 'react';

export type NavigationProps = {
  locations: Map<string, React.FC>;
  active: string;
  setActive: (location: string) => void;
};
export const Navigation: React.FC<NavigationProps> = ({
  active,
  locations,
  setActive,
}) => {
  const [open, setOpen] = useState(false);
  const keys = Array.from(locations.keys());
  const smallMode = useMatchMediaQuery('(max-width: 40rem)');

  return smallMode ? (
    <Panel variant="secondary" style={{ padding: 0, width: '100%' }}>
      <Dropdown
        isOpen={open}
        onOpenChange={setOpen}
        ListProps={{
          onHighlight: (index) => {
            if (index < 0) return;
            setTimeout(() => {
              setActive(Array.from(locations)[index][0]);
              setOpen(false);
            });
          },
          width: document.body.clientWidth,
        }}
        source={keys}
        selected={active}
        onSelectionChange={(_, selected) =>
          selected && keys.indexOf(selected) >= 0 && setActive(selected)
        }
        width={document.body.clientWidth}
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
