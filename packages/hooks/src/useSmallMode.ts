import { Breakpoints, useBreakpoints } from '@salt-ds/core';
import { useMatchMediaQuery } from './useMatchMediaQuery';

export const smallModeBreakpoint: keyof Breakpoints = 'md';

export const useSmallMode = (): boolean => {
  return useSmallerThan(smallModeBreakpoint);
};

export const useSmallerThan = (breakpoint: keyof Breakpoints): boolean => {
  const breakpoints = useBreakpoints();
  const maxWidth = breakpoints[breakpoint];
  const isSmaller = useMatchMediaQuery(`(max-width: ${maxWidth}px)`);
  return isSmaller;
};
