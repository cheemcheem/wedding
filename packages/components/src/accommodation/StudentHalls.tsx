import React from 'react';
import { Accordion } from '@salt-ds/lab';
import { StudentHallProps } from './StudentHall';

interface StudentHallsProps {
  children:
    | React.ReactElement<StudentHallProps>
    | React.ReactElement<StudentHallProps>[];
}

export const StudentHalls: React.FC<StudentHallsProps> = ({ children }) => {
  return <Accordion maxExpandedItems={1}>{children}</Accordion>;
};
