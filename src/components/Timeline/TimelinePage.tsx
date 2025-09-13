import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { HeaderSeparator, HeaderText } from '../../shared/styles/sharedStyles';
import {
  DateText,
  DescriptionText,
  HeaderParagraph,
  SectionSeparator,
  TimelineCoinWrapper,
  TimelineContentWrapper,
  TimelineTooltip,
  TimelineWrapper,
} from './TimelinePage.styles';
import { TimelineData } from '../../assets/TimelineData';
import { CollectionData } from '../../assets/CollectionData';
import { getCleanMintDate } from '../../shared/utils/dateHelper';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';
import { Routes } from '../../shared/utils/router';
import { CoinCard } from '../Collection/CoinCard/CoinCard';
import { TimelineListItemContent } from './TimelinePage.types';
import { useContext, useEffect, useState } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import {
  FilterCheckbox,
  FilterCheckboxWrapper,
  FilterLabel,
} from '../Collection/Collection.styles';

const SortByDate = (a: TimelineListItemContent, b: TimelineListItemContent) => {
  return getCleanMintDate(a.date) - getCleanMintDate(b.date);
};

const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 90, height: 90 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 150, height: 150 };
  }
};

const getTimeDifference = (date: string) => {
  const dateRange = [getCleanMintDate(date)];
  if (date.includes('-')) {
    dateRange.push(getCleanMintDate(date, true));
  }

  // If we have an exact date, return the flat difference.
  if (dateRange.length === 1) {
    return `${new Date().getFullYear() - dateRange[0]} years ago`;
  }

  // Otherwise with a range, note the whole range.
  const firstDiff = new Date().getFullYear() - dateRange[0];
  const secondDiff = new Date().getFullYear() - dateRange[1];

  return `${firstDiff} - ${secondDiff} years ago`;
};

// Exclude certain collection items from the timeline.
// Currently, this is used to exclude an early modern coin that's part of the collection,
// but not relevant for the timeline which focuses on ancient history.
const excludedCollectionItems = [14];

const shouldShowItem = (item: TimelineListItemContent, showWorldHistory: boolean) => {
  if (item.collectionItem && excludedCollectionItems.includes(item.collectionItem.id)) {
    return false;
  }

  if (!showWorldHistory && item.isWorldHistory) {
    return false;
  }

  return true;
};

export const TimelinePage = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Timeline);
  }, [setSelectedRoute]);

  const [showWorldHistory, setShowWorldHistory] = useState(true);

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });
  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const collectionData: TimelineListItemContent[] = CollectionData.map((item) => ({
    date: item.mint.date,
    description: item.title,
    collectionItem: item,
  }));

  const sortedTimelineData = [...TimelineData, ...collectionData].sort(SortByDate);

  const TimelineListItem = ({ item }: { item: TimelineListItemContent }) => {
    const hasCollectionItem = !!item.collectionItem;
    const imageDimensions = getImageDimensions(screenSize);

    const isWorldHistory = item.isWorldHistory;

    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={isWorldHistory ? 'warning' : 'grey'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color={isWorldHistory ? 'warning' : undefined}>
          <TimelineTooltip placement="top" arrow title={getTimeDifference(item.date)}>
            <TimelineContentWrapper>
              <DateText>{`${item.date} ${isWorldHistory ? '(World)' : ''}`}</DateText>
              <DescriptionText>
                {item.description}
                {hasCollectionItem && ' struck'}
              </DescriptionText>
              {hasCollectionItem && (
                <TimelineCoinWrapper>
                  <CoinCard
                    coin={item.collectionItem!}
                    options={{
                      hideTitle: true,
                      sizeOverride: imageDimensions,
                      noPadding: true,
                      disableRedirect: true,
                      modalRerouteOverride: Routes.Timeline,
                    }}
                  />
                </TimelineCoinWrapper>
              )}
            </TimelineContentWrapper>
          </TimelineTooltip>
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <>
      <HeaderText>Collection Timeline</HeaderText>
      <HeaderSeparator />
      <HeaderParagraph>
        This page tracks the Niho Collection in chronological order, in the context of the
        historical events of the time. Often, it's difficult to understand the exact place in time a
        coin originated from, so this timeline aims to provide a clearer picture of the history
        behind each coin.
      </HeaderParagraph>
      <FilterCheckboxWrapper>
        <FilterCheckbox
          type="checkbox"
          checked={showWorldHistory}
          onChange={(e) => setShowWorldHistory(e.target.checked)}
        />
        <FilterLabel>Show World History Events</FilterLabel>
      </FilterCheckboxWrapper>
      <SectionSeparator />
      <TimelineWrapper>
        <Timeline position={isMediumScreenOrLarger ? 'alternate' : 'right'}>
          {sortedTimelineData.map((item) =>
            shouldShowItem(item, showWorldHistory) ? (
              <TimelineListItem
                key={`${item.date}-${item.description.substring(0, 3)}`}
                item={item}
              />
            ) : null,
          )}
          {showWorldHistory && (
            <TimelineListItem
              item={{
                date: `${new Date().getFullYear()} AD`,
                description: 'You are here!',
                isWorldHistory: true,
              }}
            />
          )}
        </Timeline>
      </TimelineWrapper>
    </>
  );
};
