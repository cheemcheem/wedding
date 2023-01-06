/// <reference types="modular-scripts/react-app-env" />
declare module '*.md' {
  const value: string; // markdown is just a string
  export default value;
}
