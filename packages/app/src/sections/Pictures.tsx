import React from 'react';
import { Link, Text } from '@salt-ds/core';
import { StackCard } from '@wedding/components';

const picturesUrl =
  'https://gallery.andi-watson.co.uk/-katharinekathan/gallery?inviteToken=AAAAAFcAAABuZoHB95YvSfE';

export const Pictures: React.FC = () => (
  <StackCard style={{ height: '100%' }}>
    <Text>
      Photos of our wedding day can be viewed at the following link:{' '}
      <Link href={picturesUrl}>wedding photos</Link>. All of the photographs
      displayed at this link can be downloaded by any user free of charge.
    </Text>
  </StackCard>
);
