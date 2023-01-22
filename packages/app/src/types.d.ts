import 'csstype';

declare module 'csstype' {
  interface Properties {
    // Add a missing property
    // WebkitRocketLauncher?: string;

    // // Add a CSS Custom Property
    // '--theme-color'?: 'black' | 'white';

    // Allow namespaced CSS Custom Properties
    // [index: `--theme-${string}`]: string;

    // // Allow any CSS Custom Properties
    [index: `--${string}`]: string;

    // // ...or allow any other property
    // [index: string]: string;
  }
}
