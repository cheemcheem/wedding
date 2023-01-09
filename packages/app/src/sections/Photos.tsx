import { Panel } from '@jpmorganchase/uitk-core';
import { ContentStatus } from '@jpmorganchase/uitk-lab';
import React from 'react';

export const Photos: React.FC = () => (
  <Panel>
    <ContentStatus
      title="Coming Soon"
      message="Please check here after the wedding to see photos from the wedding day!"
      status="warning"
    />
  </Panel>
);
