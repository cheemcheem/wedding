import { FlowLayout } from '@jpmorganchase/uitk-core';
import { Icon } from '@jpmorganchase/uitk-icons';
import { Metric, MetricHeader, MetricContent } from '@jpmorganchase/uitk-lab';
import React from 'react';

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
  // TODO: Value should be non-discounted, subvalue should have discount code WED23
  const value = `£${price.toFixed(2)}`;
  const subvalue = discountPercent
    ? `${discountPercent}% discount available using code WED23`
    : 'No discount available';
  return (
    <FlowLayout justify="space-between">
      <Metric
        size="small"
        align="left"
        direction={discountPercent ? 'up' : 'down'}
      >
        <MetricHeader {...{ subtitle, title }} />
        <MetricContent {...{ subvalue, value }} />
      </Metric>
      <FlowLayout align="center" gap={0}>
        {icon.map((Icon, index) => (
          <Icon key={index} size={'large'} />
        ))}
      </FlowLayout>
    </FlowLayout>
  );
};
