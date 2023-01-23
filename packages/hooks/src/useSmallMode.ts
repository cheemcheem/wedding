import { Breakpoints, useBreakpoints } from '@jpmorganchase/uitk-core';
import { useMatchMediaQuery } from './useMatchMediaQuery';

export const useSmallMode = (): boolean => {
  return useSmallerThan('md');
};

export const useSmallerThan = (breakpoint: keyof Breakpoints): boolean => {
  const breakpoints = useBreakpoints();
  console.log({ breakpoints });
  const maxWidth = breakpoints[breakpoint];
  const isSmaller = useMatchMediaQuery(`(max-width: ${maxWidth}px)`);
  return isSmaller;
};
