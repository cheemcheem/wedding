import React from 'react';
import '@salt-ds/theme/index.css';
import { ThemeProvider, WithBackgrounColour } from '@wedding/components';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <WithBackgrounColour>
          <App />
        </WithBackgrounColour>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
