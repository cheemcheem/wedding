import {
  Card,
  Panel,
  StackLayout,
  H2,
  H3,
  Text,
} from '@jpmorganchase/uitk-core';
import { Link } from '@jpmorganchase/uitk-lab';
import React from 'react';

export const AdditionalInfo: React.FC = () => {
  /* Under additional info, have:
      - Timings are strict
      - Dress Code
      - photography
      - confetti
      - parking
      - st andrews taxi firms
      - gifts
      - Contact us (anonymous email address)
    Remove entire site from robots.txt
  */

  return (
    <Panel>
      <StackLayout>
        <StackLayout>
          <H2 styleAs="h1">St Andrews Taxi Firms</H2>
          <Card>
            <H3 styleAs="h2">St Andrews Taxis</H3>
          </Card>
        </StackLayout>
        <StackLayout>
          <H2 styleAs="h1">Gifts</H2>
          <Card>
            <H3 styleAs="h2">Please no gifts</H3>
            <Text styleAs="h3">Your presence is the only gift we need!</Text>
            <Text>
              <Text>Consider donating instead to </Text>
              <Link href="https://www.wateraid.org/uk" target="_blank">
                WaterAid
              </Link>
            </Text>
          </Card>
        </StackLayout>
      </StackLayout>
    </Panel>
  );
};
