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

// Exclude certain collection items from the timeline.
// Currently, this is used to exclude an early modern coin that's part of the collection,
// but not relevant for the timeline which focuses on ancient history.
const excludedCollectionItems = [14];

const shouldShowItem = (item: TimelineListItemContent) => {
  if (item.collectionItem && excludedCollectionItems.includes(item.collectionItem.id)) {
    return false;
  }

  return true;
};

export const TimelinePage = () => {
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

    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineContentWrapper>
            <DateText>{item.date}</DateText>
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
      <SectionSeparator />
      <TimelineWrapper>
        <Timeline position={isMediumScreenOrLarger ? 'alternate' : 'right'}>
          {sortedTimelineData.map((item) =>
            shouldShowItem(item) ? <TimelineListItem key={item.date} item={item} /> : null,
          )}
        </Timeline>
      </TimelineWrapper>
    </>
  );
};
