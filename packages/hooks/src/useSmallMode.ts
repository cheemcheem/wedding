import { useBreakpoints } from '@jpmorganchase/uitk-core';
import { useMatchMediaQuery } from './useMatchMediaQuery';

export const useSmallMode = (): boolean => {
  const { sm } = useBreakpoints();
  const isSmallScreen = useMatchMediaQuery(`(max-width: ${sm}px)`);
  return isSmallScreen;
};
