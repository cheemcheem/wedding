import {
  FlowLayout,
  H3,
  H4,
  StackLayout,
  Text,
} from '@jpmorganchase/uitk-core';
import {
  AccordionSection,
  AccordionSummary,
  AccordionDetails,
} from '@jpmorganchase/uitk-lab';
import React, { useContext } from 'react';
import { PrintContext } from '../PrintContext';
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
  const { printMode } = useContext(PrintContext);
  return (
    <AccordionSection expanded={printMode}>
      {printMode || (
        <AccordionSummary>
          <FlowLayout align="center" style={{ height: '100%' }}>
            <Text maxRows={1}>{name}</Text>
          </FlowLayout>
        </AccordionSummary>
      )}
      <AccordionDetails>
        <StackLayout
          style={{
            paddingRight:
              'var(--uitkCard-padding, calc(var(--uitk-size-unit) * 3))',
          }}
          gap={2}
          separators
        >
          <StackLayout gap={2}>
            <H4 styleAs="h3">{name}</H4>
            <Text styleAs="h4">({type})</Text>
            <StudentHallContactDetails {...{ email, telephone, website }} />
          </StackLayout>
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
