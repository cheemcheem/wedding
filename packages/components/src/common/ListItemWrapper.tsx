import { Panel, ToolkitProvider, useDensity } from '@jpmorganchase/uitk-core';
import React, { PropsWithChildren } from 'react';

export const ListItemWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const density = useDensity();
  return (
    <ToolkitProvider density="high">
      <Panel style={{ background: 'none' }}>
        <ToolkitProvider density={density}>{children}</ToolkitProvider>
      </Panel>
    </ToolkitProvider>
  );
};
