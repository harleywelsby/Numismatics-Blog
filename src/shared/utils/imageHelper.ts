export const getFullImagePath = (relativePath: string) => {
  return `${window.location.protocol}//${window.location.host}/${relativePath}`;
};
