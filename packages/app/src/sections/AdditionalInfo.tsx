import { Card, Panel, StackLayout } from '@jpmorganchase/uitk-core';
import { H2, H3, Link, P, Span } from '@jpmorganchase/uitk-lab';
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
            <Span styleAs="h3">Your presence is the only gift we need!</Span>
            <P>
              <Span>Consider donating instead to </Span>
              <Link href="https://www.wateraid.org/uk" target="_blank">
                WaterAid
              </Link>
            </P>
          </Card>
        </StackLayout>
      </StackLayout>
    </Panel>
  );
};
