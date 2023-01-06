import { ToolkitProvider } from '@jpmorganchase/uitk-core';
import React from 'react';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const themeMediaQuery = '(prefers-color-scheme: dark)';
    const matchesDarkMode = window.matchMedia(themeMediaQuery);

    const updateTheme = ({ matches }: { matches: boolean }) => {
      setTheme(matches ? 'dark' : 'light');
    };
    updateTheme({ matches: matchesDarkMode.matches });
    matchesDarkMode.addEventListener('change', updateTheme);

    return () => {
      matchesDarkMode.removeEventListener('change', updateTheme);
    };
  });
  return (
    <ToolkitProvider density="low" theme={theme}>
      {children}
    </ToolkitProvider>
  );
};
