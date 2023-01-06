import { Accordion } from '@jpmorganchase/uitk-lab';

import { StudentHallProps } from './StudentHall';
import React from 'react';

interface StudentHallsProps {
  children:
    | React.ReactElement<StudentHallProps>
    | React.ReactElement<StudentHallProps>[];
}

export const StudentHalls: React.FC<StudentHallsProps> = ({ children }) => {
  return <Accordion maxExpandedItems={1}>{children}</Accordion>;
};
