import React from 'react';
import {
  StackLayout,
  StackLayoutProps,
} from '@salt-ds/core';
import { Card, CardProps } from "@salt-ds/lab";

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
