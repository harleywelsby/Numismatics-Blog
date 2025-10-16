import { Timeline } from '@mui/lab';
import { BackToTopButton, HeaderSeparator, HeaderText } from '../../shared/styles/sharedStyles';
import { TimelineData } from '../../assets/TimelineData';
import { CollectionData } from '../../assets/CollectionData';
import { getCleanMintDate, getDateWithExtension } from '../../shared/utils/dateHelper';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';
import { Routes } from '../../shared/utils/router';
import { TimelineItemCategory, TimelineListItemContent } from './TimelinePage.types';
import { useContext, useEffect, useState } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import {
  FilterCheckbox,
  FilterCheckboxWrapper,
  FilterLabel,
  FilterSelectBox,
} from '../Collection/Collection.styles';
import { Slider } from '@mui/material';
import { TIMELINE_SLIDER_RESET_MINMAX } from '../../config';
import { getTimelinePosition, SortByDate } from './TimelineHelpers';
import { TimelineListItem } from './TimelineListItem';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Authority } from '../../shared/types/Authority.types';
import styled from 'styled-components';

const getCategoriesByAuthority = (authority: Authority) => {
  switch (authority) {
    case Authority.RomanRepublic:
      return [TimelineItemCategory.RomanRepublic];
    case Authority.RomanEmpire:
    case Authority.GallicEmpire:
      return [TimelineItemCategory.RomanEmpire];
    case Authority.Macedonia:
    case Authority.SeleucidEmpire:
      return [TimelineItemCategory.AncientGreece];
    case Authority.UmayyadCaliphate:
      return [TimelineItemCategory.NearEast];
    default:
      return [TimelineItemCategory.World];
  }
};

export const TimelinePage = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Timeline);
  }, [setSelectedRoute]);

  const [showWorldHistory, setShowWorldHistory] = useState(true);
  const [focus, setFocus] = useState(TimelineItemCategory.All);

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
    categories: getCategoriesByAuthority(item.authority),
    collectionItem: item,
  }));

  // Sort timeline data by date, including all collection items.
  const sortedTimelineData = [...TimelineData, ...collectionData].sort(SortByDate);
  sortedTimelineData.push({
    date: `${new Date().getFullYear()} AD`,
    description: 'You are here!',
    categories: [TimelineItemCategory.World],
  });

  // Setup the slider.
  const [sliderValue, setSliderValue] = useState([
    getCleanMintDate(sortedTimelineData[0].date),
    getCleanMintDate(sortedTimelineData[sortedTimelineData.length - 1].date),
  ]);
  const [sliderMinMax, setSliderMinMax] = useState(sliderValue);

  const shouldShowItem = (item: TimelineListItemContent, showWorldHistory: boolean) => {
    const isWorldItem = item.categories.includes(TimelineItemCategory.World);
    const isSetToAll = focus === TimelineItemCategory.All;

    // If Ignore World Items is enabled, and this is a world item, ignore it.
    if (!showWorldHistory && isWorldItem) {
      return false;
    }

    // If the item is outside the slider range, ignore it.
    if (
      getCleanMintDate(item.date) < sliderValue[0] ||
      getCleanMintDate(item.date) > sliderValue[1]
    ) {
      return false;
    }

    // Always return if set to "All".
    if (isSetToAll) {
      return true;
    }

    // If the item is in the focus category, return true.
    if (!item.categories.includes(focus)) {
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
      const firstItem = sortedTimelineData.find(
        (item) => !item.categories.includes(TimelineItemCategory.World),
      );
      const lastItem = sortedTimelineData
        .reverse()
        .find((item) => !item.categories.includes(TimelineItemCategory.World));

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
      <br />
      <FilterCheckboxWrapper>
        <FilterLabel>Focus on:</FilterLabel>
        <FilterSelectBox
          name="focus"
          value={focus}
          onChange={(e) => setFocus(e.target.value as TimelineItemCategory)}
        >
          {Object.values(TimelineItemCategory).map((category) => {
            // Ignore Greece/World (not enough events)
            if (
              category === TimelineItemCategory.AncientGreece ||
              category === TimelineItemCategory.Medieval ||
              category === TimelineItemCategory.World
            ) {
              return null;
            }

            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </FilterSelectBox>
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
              />
            ) : null,
          )}
        </Timeline>
      </TimelineWrapper>
    </>
  );
};

const HeaderParagraph = styled.p`
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  text-align: left;
  max-width: 80%;
  justify-self: center;

  @media (min-width: 86em) {
    max-width: 60%;
  }
`;

const TimelineWrapper = styled.div`
  max-width: 70%;
  justify-self: center;

  @media (max-width: 35em) {
    max-width: 95%;

    ::before {
      display: none;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }
`;
const SectionSeparator = styled.div`
  margin: 2rem 0 0 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 80%;
  justify-self: center;

  @media (min-width: 86em) {
    max-width: 60%;
  }
`;

const SliderHeader = styled.h2`
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  text-align: left;
  max-width: 80%;
  justify-self: center;

  padding: 0;
  margin: 2rem 0 0.5rem 0;

  @media (max-width: 35em) {
    margin: 0.5rem 0;
  }
`;

const SliderWrapper = styled.div`
  width: 70%;
  justify-self: center;
  gap: 0.5rem;
  padding-bottom: 1rem;

  @media (max-width: 35em) {
    margin-top: 2rem;
  }
`;
