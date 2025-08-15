// If only 1 or 2 items are in the list, adjust the columns.
export const getColumnOverride = (
  isSmallScreen: boolean,
  isMediumScreen: boolean,
  dataLength: number,
) => {
  let columns = '33% 33% 33%';

  if (isSmallScreen) {
    columns = '100%';
  } else if (isMediumScreen) {
    columns = '50% 50%';
  }

  switch (dataLength) {
    case 1:
      return '100%';
    case 2:
      return isSmallScreen ? columns : '50% 50%';
    default:
      return columns;
  }
};
