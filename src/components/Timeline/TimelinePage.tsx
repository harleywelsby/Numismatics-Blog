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
  TimelineContentWrapper,
  TimelineWrapper,
} from './TimelinePage.styles';
import { TimelineData } from '../../assets/TimelineData';
import { CollectionData } from '../../assets/CollectionData';
import { getCleanMintDate } from '../../shared/utils/dateHelper';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';
import { CollectionItem } from '../Collection/Collection.types';
import { CoinCard } from '../Collection/CoinCard';
import { Routes } from '../../shared/utils/router';

export type TimelineListItemContent = {
  date: string;
  description: string;
  collectionItem?: CollectionItem;
};

const SortByDate = (a: TimelineListItemContent, b: TimelineListItemContent) => {
  return getCleanMintDate(a.date) - getCleanMintDate(b.date);
};

const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 180, height: 90 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 300, height: 150 };
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
    date: item.mintDate,
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
              <CoinCard
                coin={item.collectionItem!}
                hideTitle
                sizeOverride={imageDimensions}
                noPadding
                disableRedirect
                modalRerouteOverride={Routes.Timeline}
              />
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
        Ancient coins reflect numerous details of their place in time. Different periods and empires
        have distinct styles and denominations. It's often hard to visualize the exact moment of
        history that a given coin originated from, so this timeline aims to provide a new, visual
        way to see the collection in the context of their place in history.
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
