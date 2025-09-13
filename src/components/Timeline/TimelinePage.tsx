import { Timeline } from '@mui/lab';
import { BackToTopButton, HeaderSeparator, HeaderText } from '../../shared/styles/sharedStyles';
import {
  HeaderParagraph,
  SectionSeparator,
  SliderHeader,
  SliderWrapper,
  TimelineWrapper,
} from './TimelinePage.styles';
import { TimelineData } from '../../assets/TimelineData';
import { CollectionData } from '../../assets/CollectionData';
import { getCleanMintDate, getDateWithExtension } from '../../shared/utils/dateHelper';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';
import { Routes } from '../../shared/utils/router';
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
import { getTimelinePosition, SortByDate } from './TimelineHelpers';
import { TimelineListItem } from './TimelineListItem';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  // Sort timeline data by date, including all collection items.
  const sortedTimelineData = [...TimelineData, ...collectionData].sort(SortByDate);
  sortedTimelineData.push({
    date: `${new Date().getFullYear()} AD`,
    description: 'You are here!',
    isWorldHistory: true,
  });

  // Setup the slider.
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

  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setShowBackToTopButton(
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50,
      );
    };
  }, []);

  return (
    <>
      {showBackToTopButton && (
        <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* @ts-expect-error Icon types are busted, but this works */}
          <FontAwesomeIcon icon={faAngleDoubleUp} />
          Back to Top
        </BackToTopButton>
      )}
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
        <Timeline position={getTimelinePosition(isMediumScreenOrLarger)}>
          {sortedTimelineData.map((item) =>
            shouldShowItem(item, showWorldHistory) ? (
              <TimelineListItem
                key={`${item.date}-${item.description.substring(0, 3)}`}
                item={item}
                screenSize={screenSize}
                sortedTimelineData={sortedTimelineData}
                worldCollectionItems={worldCollectionItems}
              />
            ) : null,
          )}
        </Timeline>
      </TimelineWrapper>
    </>
  );
};
