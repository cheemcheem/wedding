import { StackLayout, FlowLayout } from '@jpmorganchase/uitk-core';
import {
  CallSolidIcon,
  GlobeSolidIcon,
  MessageSolidIcon,
} from '@jpmorganchase/uitk-icons';
import { Link, Text } from '@jpmorganchase/uitk-lab';
import React from 'react';

export interface StudentHallContactDetailsProps {
  email: string;
  telephone: string;
  website: string;
}

export const StudentHallContactDetails: React.FC<
  StudentHallContactDetailsProps
> = ({ email, telephone, website }) => {
  return (
    <StackLayout gap={3}>
      <StackLayout gap={1}>
        <FlowLayout align="center" gap={1}>
          <CallSolidIcon
            // @ts-ignore
            style={{ '--icon-color': 'var(--uitk-palette-success-icon)' }}
          />
          <Text>
            <Link href={`tel:${telephone}`}>{telephone}</Link>
          </Text>
        </FlowLayout>
        <FlowLayout align="center" gap={1}>
          <MessageSolidIcon
            // @ts-ignore
            style={{ '--icon-color': 'var(--uitk-palette-info-icon)' }}
          />
          <Text>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
        </FlowLayout>
        <FlowLayout align="center" gap={1}>
          <GlobeSolidIcon
            // @ts-ignore
            style={{ '--icon-color': 'var(--uitk-palette-info-icon)' }}
          />
          <Text>
            <Link href={website} target="_blank">
              website
            </Link>
          </Text>
        </FlowLayout>
      </StackLayout>
    </StackLayout>
  );
};
