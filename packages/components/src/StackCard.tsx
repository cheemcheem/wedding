import {
  Card,
  CardProps,
  StackLayout,
  StackLayoutProps,
} from '@jpmorganchase/uitk-core';
import React from 'react';

type StackCardProps = Pick<StackLayoutProps, 'gap'> & CardProps;

export const StackCard: React.FC<StackCardProps> = ({
  children,
  gap = 2,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <StackLayout gap={gap}>{children}</StackLayout>
    </Card>
  );
};
