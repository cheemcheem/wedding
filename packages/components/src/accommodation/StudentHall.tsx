import {
  FlowLayout,
  H3,
  H4,
  Label,
  StackLayout,
  Text,
} from '@jpmorganchase/uitk-core';
import {
  AccordionSection,
  AccordionSummary,
  AccordionDetails,
} from '@jpmorganchase/uitk-lab';
import React from 'react';
import {
  StudentHallContactDetails,
  StudentHallContactDetailsProps,
} from './StudentHallContactDetails';
import { StudentHallPrice, StudentHallPriceProps } from './StudentHallPrice';

export interface StudentHallProps extends StudentHallContactDetailsProps {
  name: string;
  type: string;
  prices: StudentHallPriceProps[];
}

export const StudentHall: React.FC<StudentHallProps> = ({
  email,
  name,
  type,
  prices,
  telephone,
  website,
}) => {
  return (
    <AccordionSection>
      <AccordionSummary>
        <FlowLayout align="center" style={{ height: '100%' }}>
          <Text maxRows={1}>{name}</Text>
        </FlowLayout>
      </AccordionSummary>
      <AccordionDetails>
        <StackLayout
          style={{
            paddingRight:
              'var(--uitkCard-padding, calc(var(--uitk-size-unit) * 3))',
          }}
          gap={2}
          separators
        >
          <Text>
            <H3>{name}</H3>
            <H4>({type})</H4>
            <StudentHallContactDetails {...{ email, telephone, website }} />
          </Text>
          {prices.map(({ icon, price, title, discountPercent, subtitle }) => (
            <StudentHallPrice
              {...{ icon, key: title, price, title, discountPercent, subtitle }}
            />
          ))}
        </StackLayout>
      </AccordionDetails>
    </AccordionSection>
  );
};
