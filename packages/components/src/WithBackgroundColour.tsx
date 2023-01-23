import React, { PropsWithChildren, useEffect } from 'react';
import { getCharacteristicValue, useTheme } from '@jpmorganchase/uitk-core';

const setThemeColour = (newColour: string) => {
  const themeColour = document.createElement('meta');
  themeColour.name = 'theme-color';
  themeColour.content = newColour;
  Array.from(document.head.childNodes.entries())
    .filter((node) => node[1].nodeName === 'META')
    .forEach((node) => document.head.removeChild(node[1]));
  document.head.appendChild(themeColour);
};

const useBackgroundColour = (): void => {
  const { theme, mode } = useTheme();
  useEffect(() => {
    if (!theme) {
      return;
    }
    const backgroundColour = getCharacteristicValue(
      theme,
      'container',
      'primary-background',
      document.body,
    );
    if (backgroundColour) {
      document.body.style.backgroundColor = backgroundColour;
      const newThemeColour =
        mode === 'light' ? 'rgb(220, 213, 188)' : backgroundColour;
      setThemeColour(newThemeColour);
      if (document.body.parentElement) {
        document.body.parentElement.style.backgroundColor = backgroundColour;
      }
    }
  });
};

export const WithBackgrounColour: React.FC<PropsWithChildren> = ({
  children,
}) => {
  useBackgroundColour();
  return <>{children}</>;
};
