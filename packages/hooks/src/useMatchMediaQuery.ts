import { useEffect, useState } from 'react';

export const useMatchMediaQuery = (
  query: string,
  defaultValue = false,
): boolean => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    setState(matchMedia.matches);

    const onchange: typeof matchMedia['onchange'] = (e) => {
      setState(e.matches);
    };
    matchMedia.onchange = onchange;
    return () => {
      matchMedia.removeEventListener('change', onchange);
    };
  }, [query]);

  return state;
};
