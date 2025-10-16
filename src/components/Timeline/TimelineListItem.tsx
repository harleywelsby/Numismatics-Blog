import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { CoinCard } from '../Collection/CoinCard/CoinCard';
import { getImageDimensions, getTimeDifference } from './TimelineHelpers';
import { TimelineItemCategory, TimelineListItemContent } from './TimelinePage.types';
import { Routes } from '../../shared/utils/router';
import { ScreenSize } from '../../shared/types';
import { Tooltip } from '@mui/material';
import styled from 'styled-components';

interface TimelineListItemProps {
  item: TimelineListItemContent;
  screenSize: ScreenSize;
  sortedTimelineData: TimelineListItemContent[];
}

export const TimelineListItem = ({
  item,
  screenSize,
  sortedTimelineData,
}: TimelineListItemProps) => {
  const hasCollectionItem = !!item.collectionItem;
  const imageDimensions = getImageDimensions(screenSize);

  const isWorldHistory = item.categories.includes(TimelineItemCategory.World);

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
          <Tooltip placement={tooltipPlacement} arrow title={getTimeDifference(item.date)}>
            <DateText>{`${item.date} ${isWorldHistory ? '(World)' : ''}`}</DateText>
          </Tooltip>
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

const TimelineContentWrapper = styled.div`
  margin: 0;
  padding: 0 0 2rem 0;

  @media (max-width: 35em) {
    padding: 0 0 1rem 0;
  }
`;

const TimelineCoinWrapper = styled.div`
  padding: 1rem 0 0 0;
`;

const DateText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  color: var(--soft-white);
`;
