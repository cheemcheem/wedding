import React, { useContext } from 'react';
import { FlexLayout, FlowLayout } from '@salt-ds/core';
import { Icon } from '@salt-ds/icons';
import { Metric, MetricContent, MetricHeader } from '@salt-ds/lab';
import { PrintContext } from '../PrintContext';

export interface StudentHallPriceProps {
  discountPercent?: number;
  icon: typeof Icon[];
  price: number;
  subtitle?: string;
  title: string;
}

export const StudentHallPrice: React.FC<StudentHallPriceProps> = ({
  discountPercent,
  icon,
  subtitle = 'Per room per night',
  title,
  price,
}) => {
  const value = `£${price.toFixed(2)}`;
  const subvalue = discountPercent
    ? `${discountPercent}% discount available using code WED23`
    : 'No discount available';
  const { printMode } = useContext(PrintContext);
  return (
    <FlexLayout justify="space-between" wrap={false}>
      <Metric
        size="small"
        align="left"
        direction={discountPercent ? 'up' : 'down'}
      >
        <MetricHeader {...{ subtitle, title }} />
        <MetricContent {...{ subvalue, value }} />
      </Metric>
      <FlowLayout align="center" justify="center" gap={0}>
        {icon.map((Icon, index) => (
          <Icon key={index} size={2} />
        ))}
      </FlowLayout>
      {printMode && <br />}
    </FlexLayout>
  );
};
