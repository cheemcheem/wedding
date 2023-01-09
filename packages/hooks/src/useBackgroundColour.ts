import { useEffect } from 'react';
import { useTheme, getCharacteristicValue } from '@jpmorganchase/uitk-core';

export const useBackgroundColour = (): void => {
  const { theme, mode } = useTheme();
  console.log({ theme, mode });
  useEffect(() => {
    if (!theme) {
      return;
    }
    const backgroundColour = getCharacteristicValue(
      theme,
      'container',
      'primary-background',
    );
    if (backgroundColour) {
      document.body.style.backgroundColor = backgroundColour;
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#ff0000';
      document.head.appendChild(themeColor);
      if (document.body.parentElement) {
        document.body.parentElement.style.backgroundColor = backgroundColour;
      }
    }
  });
};
