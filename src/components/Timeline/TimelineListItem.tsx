import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { CoinCard } from '../Collection/CoinCard/CoinCard';
import { getImageDimensions, getTimeDifference } from './TimelineHelpers';
import {
  TimelineContentWrapper,
  TimelineTooltip,
  DateText,
  DescriptionText,
  TimelineCoinWrapper,
} from './TimelinePage.styles';
import { TimelineListItemContent } from './TimelinePage.types';
import { Routes } from '../../shared/utils/router';
import { ScreenSize } from '../../shared/types';

interface TimelineListItemProps {
  item: TimelineListItemContent;
  screenSize: ScreenSize;
  sortedTimelineData: TimelineListItemContent[];
  worldCollectionItems: number[];
}

export const TimelineListItem = ({
  item,
  screenSize,
  sortedTimelineData,
  worldCollectionItems,
}: TimelineListItemProps) => {
  const hasCollectionItem = !!item.collectionItem;
  const imageDimensions = getImageDimensions(screenSize);

  const isWorldHistory =
    item.isWorldHistory || worldCollectionItems.includes(item.collectionItem?.id ?? -1);

  const isEvenIndex = sortedTimelineData.indexOf(item) % 2 === 0;
  const tooltipPlacement = isEvenIndex ? 'left' : 'right';

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color={isWorldHistory ? 'warning' : 'grey'} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent color={isWorldHistory ? 'warning' : undefined}>
        <TimelineContentWrapper>
          <TimelineTooltip placement={tooltipPlacement} arrow title={getTimeDifference(item.date)}>
            <DateText>{`${item.date} ${isWorldHistory ? '(World)' : ''}`}</DateText>
          </TimelineTooltip>
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
