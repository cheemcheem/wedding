import { StackLayout } from '@jpmorganchase/uitk-core';
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
  prices: StudentHallPriceProps[];
}

export const StudentHall: React.FC<StudentHallProps> = ({
  email,
  name,
  prices,
  telephone,
  website,
}) => {
  return (
    <AccordionSection>
      <AccordionSummary>{name}</AccordionSummary>
      <AccordionDetails>
        <StackLayout>
          <StudentHallContactDetails {...{ email, telephone, website }} />
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
