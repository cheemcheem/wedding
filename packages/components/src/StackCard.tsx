import React from 'react';
import { Card, CardProps, StackLayout, StackLayoutProps } from '@salt-ds/core';

type StackCardProps = Pick<StackLayoutProps<'div'>, 'gap'> & CardProps;

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
