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
  SliderHeader,
  SliderWrapper,
  TimelineCoinWrapper,
  TimelineContentWrapper,
  TimelineTooltip,
  TimelineWrapper,
} from './TimelinePage.styles';
import { TimelineData } from '../../assets/TimelineData';
import { CollectionData } from '../../assets/CollectionData';
import { getCleanMintDate, getDateWithExtension } from '../../shared/utils/dateHelper';
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
import { Slider } from '@mui/material';
import { TIMELINE_SLIDER_RESET_MINMAX } from '../../config';

const formatWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

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
    return `${formatWithCommas(new Date().getFullYear() - dateRange[0])} years ago`;
  }

  // Otherwise with a range, note the whole range.
  const firstDiff = new Date().getFullYear() - dateRange[0];
  const secondDiff = new Date().getFullYear() - dateRange[1];

  return `${formatWithCommas(firstDiff)} - ${formatWithCommas(secondDiff)} years ago`;
};

// Exclude certain collection items from the timeline.
// Currently, this is used to exclude an early modern coin that's part of the collection,
// but not relevant for the timeline which focuses on ancient history.
const worldCollectionItems = [14];

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
  sortedTimelineData.push({
    date: `${new Date().getFullYear()} AD`,
    description: 'You are here!',
    isWorldHistory: true,
  });

  const [sliderValue, setSliderValue] = useState([
    getCleanMintDate(sortedTimelineData[0].date),
    getCleanMintDate(sortedTimelineData[sortedTimelineData.length - 1].date),
  ]);
  const [sliderMinMax, setSliderMinMax] = useState(sliderValue);

  const shouldShowItem = (item: TimelineListItemContent, showWorldHistory: boolean) => {
    if (
      !showWorldHistory &&
      (item.isWorldHistory || worldCollectionItems.includes(item.collectionItem?.id ?? -1))
    ) {
      return false;
    }

    if (
      getCleanMintDate(item.date) < sliderValue[0] ||
      getCleanMintDate(item.date) > sliderValue[1]
    ) {
      return false;
    }

    return true;
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowWorldHistory(event.target.checked);

    if (!TIMELINE_SLIDER_RESET_MINMAX) {
      return;
    }

    if (!event.target.checked) {
      // Get the first & last items that are not "world" items.
      const firstItem = sortedTimelineData.find((item) => !item.isWorldHistory);
      const lastItem = sortedTimelineData.reverse().find((item) => !item.isWorldHistory);

      // Set slider minmax to first and last item.
      setSliderMinMax([getCleanMintDate(firstItem!.date), getCleanMintDate(lastItem!.date)]);

      // Handle overflow (TODO: not fully working yet)

      if (sliderValue[0] < getCleanMintDate(firstItem!.date)) {
        setSliderValue([getCleanMintDate(firstItem!.date), getCleanMintDate(lastItem!.date)]);
      }

      if (sliderValue[1] > getCleanMintDate(lastItem!.date)) {
        setSliderValue([getCleanMintDate(firstItem!.date), getCleanMintDate(lastItem!.date)]);
      }
    } else {
      setSliderMinMax(sliderValue);
    }
  };

  const TimelineListItem = ({ item }: { item: TimelineListItemContent }) => {
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
            <TimelineTooltip
              placement={tooltipPlacement}
              arrow
              title={getTimeDifference(item.date)}
            >
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
      <SliderWrapper>
        {isMediumScreenOrLarger && (
          <SliderHeader>
            Include events from: {getDateWithExtension(sliderValue[0])} to{' '}
            {getDateWithExtension(sliderValue[1])}
          </SliderHeader>
        )}
        {!isMediumScreenOrLarger && (
          <>
            <SliderHeader>Include events from:</SliderHeader>
            <SliderHeader>
              {getDateWithExtension(sliderValue[0])} to {getDateWithExtension(sliderValue[1])}
            </SliderHeader>
          </>
        )}
        <Slider
          sx={{ color: 'var(--title-orange)' }}
          min={sliderMinMax[0]}
          max={sliderMinMax[1]}
          value={sliderValue}
          getAriaValueText={(value) => getDateWithExtension(value)}
          onChange={(_e, value) => setSliderValue(value)}
        />
      </SliderWrapper>
      <FilterCheckboxWrapper>
        <FilterCheckbox
          type="checkbox"
          checked={showWorldHistory}
          onChange={handleCheckboxChange}
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
        </Timeline>
      </TimelineWrapper>
    </>
  );
};
