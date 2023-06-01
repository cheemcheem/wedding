export type NavigationProps<T extends string> = {
  locations: Map<T, React.FC>;
  active: T;
  setActive: (location: T) => void;
};
