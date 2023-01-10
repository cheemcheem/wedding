import { useMatchMediaQuery } from './useMatchMediaQuery';

export const useSmallMode = (): boolean => {
  return useMatchMediaQuery('(max-width: 40rem)');
};
