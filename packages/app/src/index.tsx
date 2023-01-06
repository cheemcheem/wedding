import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import '@jpmorganchase/uitk-theme/index.css';
import { ThemeProvider } from '@wedding/components';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
