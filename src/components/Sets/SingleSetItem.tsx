import { SetItem } from './Sets.Types';
import { SetItemImage, SetItemName, SetItemWrapper } from './Sets.styles';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Routes } from '../../shared/utils/router';
import { useNavigate } from 'react-router-dom';

const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 90, height: 90 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 150, height: 150 };
  }
};

export const SingleSetItem = ({ name, secondLine, imageUrl, completed, collectionId }: SetItem) => {
  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });
  const { setSelectedRoute } = useContext(NavigationContext);
  const navigate = useNavigate();

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const collectionRoute = Routes.CollectionItem.replace(':itemId', `${collectionId}`);
  const imageDimensions = getImageDimensions(screenSize);

  const handleClick = () => {
    if (!completed || !collectionId) {
      return;
    }

    setSelectedRoute(Routes.Collection);
    navigate(collectionRoute);
  };

  return (
    <SetItemWrapper>
      <SetItemImage
        onClick={handleClick}
        src={imageUrl}
        alt={name}
        width={imageDimensions.width}
        height={imageDimensions.height}
        isComplete={completed}
        loading="lazy"
      />
      <SetItemName>{name}</SetItemName>
      {secondLine && <SetItemName>{secondLine}</SetItemName>}
    </SetItemWrapper>
  );
};
