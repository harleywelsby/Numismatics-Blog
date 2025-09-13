import { TIMELINE_ALWAYS_ON_RIGHT } from '../../config';
import { ScreenSize } from '../../shared/types';
import { getCleanMintDate } from '../../shared/utils/dateHelper';
import { TimelineListItemContent } from './TimelinePage.types';

const formatWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const SortByDate = (a: TimelineListItemContent, b: TimelineListItemContent) => {
  return getCleanMintDate(a.date) - getCleanMintDate(b.date);
};

export const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 90, height: 90 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 150, height: 150 };
  }
};

export const getTimeDifference = (date: string) => {
  const dateRange = [getCleanMintDate(date)];
  if (date.includes('-')) {
    dateRange.push(getCleanMintDate(date, true));
  }

  // If we have an exact date, return the flat difference.
  if (dateRange.length === 1) {
    return `${formatWithCommas(new Date().getFullYear() - dateRange[0])} years ago`;
  }

  // Otherwise with a range, note the whole range.
  const firstDiff = new Date().getFullYear() - dateRange[0];
  const secondDiff = new Date().getFullYear() - dateRange[1];

  return `${formatWithCommas(firstDiff)} - ${formatWithCommas(secondDiff)} years ago`;
};

export const getTimelinePosition = (isMediumScreenOrLarger: boolean) => {
  if (TIMELINE_ALWAYS_ON_RIGHT) {
    return 'right';
  }

  return isMediumScreenOrLarger ? 'alternate' : 'right';
};
