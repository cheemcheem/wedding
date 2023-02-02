import React from 'react';
import { H3, H4 } from '@salt-ds/core';
import { ContentStatus } from '@salt-ds/lab';
import { StackCard } from '@wedding/components';

export const Pictures: React.FC = () => (
  <StackCard>
    <ContentStatus status="warning" />
    <H3 styleAs="h1" style={{ alignSelf: 'center' }}>
      Coming Soon
    </H3>
    <H4 styleAs="h3" style={{ alignSelf: 'center', textAlign: 'center' }}>
      Please check here after the wedding to see photographs from the day!
    </H4>
  </StackCard>
);
