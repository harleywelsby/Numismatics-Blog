export const getCleanMintDate = (mintDate: string) => {
  let result = mintDate;

  // If there's a range of dates, take the lowest possible.
  if (mintDate.includes('-')) {
    const splitDates = result.split('-');
    result = splitDates[0];
  }

  // Remove all non-numeric characters.
  result = result.replace(/\D/g, '');

  // Convert to a number (AD = positive, BC = negative) and return.
  return mintDate.includes('BC') ? -result : +result;
};
