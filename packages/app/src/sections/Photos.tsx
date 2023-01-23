import React from 'react';
import { H3, H4 } from '@jpmorganchase/uitk-core';
import { ContentStatus } from '@jpmorganchase/uitk-lab';
import { StackCard } from '@wedding/components';

export const Photos: React.FC = () => (
  <StackCard>
    <ContentStatus status="warning" />
    <H3 styleAs="h1" style={{ alignSelf: 'center' }}>
      Coming Soon
    </H3>
    <H4 styleAs="h3" style={{ alignSelf: 'center', textAlign: 'center' }}>
      Please check here after the wedding to see photos from the wedding day!
    </H4>
  </StackCard>
);
