import React, { useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { Panel, H1, H2 } from '@jpmorganchase/uitk-core';
import { PrintContext } from '@wedding/components';
import '@jpmorganchase/uitk-theme/index.css';

export const usePrint = (tabs: PrintProps['tabs']): (() => void) => {
  const print = useCallback(() => {
    const printWindow = window.open('', 'Print Dialog', 'status=1');

    if (!printWindow) {
      return;
    }

    printWindow.document.write('<!DOCTYPE html><html></html>');
    const element = printWindow.document.getElementsByTagName('html').item(0);
    if (!element) return;

    const root = createRoot(element);
    root.render(<Print tabs={tabs} />);
    printWindow.window.print();
  }, [tabs]);

  return print;
};

const style = `@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Petit+Formal+Script&display=swap');

body {
  margin: 0;
  height: 100vh;
}

h1, h2, h3, h4, p, span, body {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg, button {
  display: none!important;
}

.uitkList {
  counter-reset: hotel_link;
}

.uitkList a::before {
  counter-increment: hotel_link;
  content: counter(hotel_link) ". ";
}

a {
  color: #000;
  text-decoration: none;
}

a::after {
  color: rgb(0, 102, 204);
  content: ": " attr(href);
}

* {
  height: auto!important;
  max-height: initial!important;
}
`;

interface PrintProps {
  tabs: Map<string, React.FC>;
}
export const Print: React.FC<PrintProps> = ({ tabs }) => {
  return (
    <>
      <head>
        <title>Print Dialog</title>
        <style children={style} />
      </head>
      <body
        // @ts-ignore
        onafterprint="self.close()"
      >
        <div id="root">
          <Panel style={{ padding: '1rem' }}>
            <H1>Katharine & Kathan's Wedding</H1>
            <PrintContext.Provider value={{ printMode: true }}>
              {Array.from(tabs).map(([name, Component]) => {
                return (
                  <>
                    <H2>{name}</H2>
                    <Component />
                  </>
                );
              })}
            </PrintContext.Provider>
          </Panel>
        </div>
      </body>
    </>
  );
};
