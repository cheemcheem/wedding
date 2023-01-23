import React, { useCallback, useLayoutEffect } from 'react';
import { H1, H2, Panel } from '@jpmorganchase/uitk-core';
import { PrintContext } from '@wedding/components';
import { createRoot } from 'react-dom/client';

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
    printWindow.window.setTimeout(() => {
      printWindow.window.print();
      printWindow.window.setTimeout(printWindow.window.close, 200);
    }, 100);
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
  counter-reset: list_item;
}

.uitkListItem:not(.uitkListItem-proxy)::before {
  counter-increment: list_item;
  content: counter(list_item) ". ";
  width: 4ch;
}

.uitkListItem, .uitkListItem .uitkFlexLayout {
  display: flex;
}

a {
  color: #000;
  text-decoration: none;
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
  useLayoutEffect(() => {
    const handler = window.close;
    window.addEventListener('afterprint', handler);
    return () => {
      window.removeEventListener('afterprint', handler);
    };
  }, []);
  return (
    <>
      <head>
        <title>Print Dialog</title>
        <style children={style} />
      </head>
      <body>
        <div id="root">
          <Panel style={{ padding: '1rem' }}>
            <H1>Katharine & Kathan's Wedding</H1>
            <PrintContext.Provider
              value={{ printMode: true, printButton: null }}
            >
              {Array.from(tabs).map(([name, Component]) => {
                return (
                  <React.Fragment key={name}>
                    <H2>{name}</H2>
                    <Component />
                  </React.Fragment>
                );
              })}
            </PrintContext.Provider>
          </Panel>
        </div>
      </body>
    </>
  );
};
