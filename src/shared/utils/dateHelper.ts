export const getCleanMintDate = (mintDate: string, useHighestInRange?: boolean) => {
  let result = mintDate;

  if (mintDate.includes('-')) {
    const splitDates = result.split('-');
    result = useHighestInRange ? splitDates[1] : splitDates[0];
  }

  // Remove all non-numeric characters.
  result = result.replace(/\D/g, '');

  // Convert to a number (AD = positive, BC = negative) and return.
  return mintDate.includes('BC') ? -result : +result;
};

export const getDateWithExtension = (date: number) => {
  return date > 0 ? `${date} AD` : `${Math.abs(date)} BC`;
};
