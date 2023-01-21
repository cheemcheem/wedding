import { ContentStatus } from '@jpmorganchase/uitk-lab';
import React from 'react';

//TODO: Update to match font size
export const Photos: React.FC = () => (
  <ContentStatus
    title="Coming Soon"
    message="Please check here after the wedding to see photos from the wedding day!"
    status="warning"
  />
);
