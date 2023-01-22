import { ReactNode } from 'react';
import { createContext } from 'react';

type PrintContextValue = {
  printMode?: boolean;
  printButton: ReactNode;
};

export const PrintContext = createContext<PrintContextValue>({
  printButton: null,
});
