import {
  Text,
  StackLayout,
  FlowLayout,
  FlexLayout,
} from '@jpmorganchase/uitk-core';
import {
  CallSolidIcon,
  GlobeSolidIcon,
  MessageSolidIcon,
} from '@jpmorganchase/uitk-icons';
import { Link } from '@jpmorganchase/uitk-lab';
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
            style={{ '--icon-color': 'var(--uitk-palette-success-foreground)' }}
          />
          <Text>
            <Link href={`tel:${telephone}`}>{telephone}</Link>
          </Text>
        </FlowLayout>
        <FlowLayout align="center" gap={1} wrap={false}>
          <MessageSolidIcon
            // @ts-ignore
            style={{ '--icon-color': 'var(--uitk-palette-info-foreground)' }}
          />
          <Text maxRows={1}>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
        </FlowLayout>
        <FlowLayout align="center" gap={1}>
          <GlobeSolidIcon
            // @ts-ignore
            style={{ '--icon-color': 'var(--uitk-palette-info-foreground)' }}
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
