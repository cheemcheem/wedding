import { createContext } from 'react';

interface PrintContextValue {
  printMode?: true;
}
export const PrintContext = createContext<PrintContextValue>({});
