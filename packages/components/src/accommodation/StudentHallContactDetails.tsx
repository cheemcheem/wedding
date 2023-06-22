import React, { useContext } from 'react';
import { FlexLayout, FlowLayout, StackLayout, Text } from '@salt-ds/core';
import {
  CallSolidIcon,
  GlobeSolidIcon,
  MessageSolidIcon,
} from '@salt-ds/icons';
import { PrintContext } from '../PrintContext';
import { PrintLink } from '../PrintLink';

export interface StudentHallContactDetailsProps {
  email: string;
  telephone: string;
  website: string;
}

export const StudentHallContactDetails: React.FC<
  StudentHallContactDetailsProps
> = ({ email, telephone, website }) => {
  const { printMode } = useContext(PrintContext);
  return (
    <StackLayout gap={3}>
      <StackLayout gap={1}>
        <FlowLayout align="center" gap={1}>
          <CallSolidIcon
            style={{
              '--icon-color': 'var(--salt-palette-success-foreground, green)',
            }}
          />
          <Text>
            <PrintLink prefix="tel:" href={telephone} />
          </Text>
        </FlowLayout>
        <FlowLayout align="center" gap={1}>
          <GlobeSolidIcon
            style={{
              '--icon-color': 'var(--salt-palette-info-foreground, steelblue)',
            }}
          />
          <Text>
            <PrintLink href={website} target="_blank" />
          </Text>
        </FlowLayout>
        <FlexLayout align="center" gap={1} wrap={false}>
          <MessageSolidIcon
            style={{
              '--icon-color': 'var(--salt-palette-info-foreground, steelblue)',
            }}
          />
          <Text maxRows={1}>
            <PrintLink prefix="mailto:" href={email} />
          </Text>
        </FlexLayout>
        {printMode && <br />}
      </StackLayout>
    </StackLayout>
  );
};
