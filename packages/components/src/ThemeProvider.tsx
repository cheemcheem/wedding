import React from 'react';
import {
  Breakpoints,
  Density,
  Mode,
  SaltProvider,
} from '@salt-ds/core';
import { useSaveState } from '@wedding/hooks';

// defaults
// xs: 0,
// sm: 600,
// md: 960,
// lg: 1280,
// xl: 1920,
const breakpoints: Breakpoints = {
  xs: 0,
  sm: 300,
  md: 600,
  lg: 1920,
  xl: 2560,
};

interface FontSizeContextData {
  setFontSize: (density: Density) => void;
}

export const FontSizeContext = React.createContext<FontSizeContextData>({
  setFontSize: () => undefined,
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [density, setDensity] = useSaveState<Density>('density', 'low');
  const [theme, setTheme] = React.useState<Mode>('light');

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
  }, []);

  return (
    <SaltProvider density={density} mode={theme} breakpoints={breakpoints}>
      <FontSizeContext.Provider value={{ setFontSize: setDensity }}>
        {children}
      </FontSizeContext.Provider>
    </SaltProvider>
  );
};
