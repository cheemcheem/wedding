import React, { useEffect, useState } from 'react';

export const useSaveState = <T>(
  key: string,
  initialValue: T | (() => T),
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const initalState = localStorage.getItem(key);
  const [state, setState] = useState<T>(
    initalState ? (JSON.parse(initalState) as T) : initialValue,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
