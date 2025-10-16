import { SetItem, SingleSetItemProps } from './Sets.types';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { CollectionData } from '../../assets/CollectionData';
import { Routes } from '../../shared/utils/router';
import { CoinCardModal } from '../Collection/CoinCard/CoinCardModal';
import { CollectionItem } from '../../shared/types/CollectionItem.types';
import styled, { css } from 'styled-components';

const validateSetItem = (setItem: SetItem) => {
  // State 1: No linked collection item.
  if (!setItem.linkedCollectionItem) {
    return !!setItem.imageUrl; // Has image URL
  }

  // State 2: Linked collection item exists.
  if (setItem.linkedCollectionItem) {
    return !setItem.imageUrl; // No Image URL
  }
};

const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 120, height: 120 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 200, height: 200 };
  }
};

const getImageSrc = (setItem: SetItem, collectionItem?: CollectionItem) => {
  if (setItem.linkedCollectionItem && collectionItem) {
    return setItem.linkedCollectionItem.face === 'obverse'
      ? collectionItem.obverse.imagePath
      : collectionItem.reverse.imagePath;
  }

  // Even though all params are nullable, we will ALWAYS have one or the other.
  return setItem.imageUrl;
};

export const SingleSetItem = ({ setItem }: SingleSetItemProps) => {
  if (!validateSetItem(setItem)) {
    throw new Error(`Invalid set item: ${JSON.stringify(setItem)}`);
  }

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  const collectionItem = setItem.linkedCollectionItem
    ? CollectionData.find((item) => item.id === setItem.linkedCollectionItem!.id)
    : undefined;

  const [showModal, setShowModal] = useState(false);

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const imageDimensions = getImageDimensions(screenSize);

  const handleClick = () => {
    if (!setItem.completed || !collectionItem) {
      return;
    }

    setShowModal(true);
  };

  return (
    <SetItemWrapper>
      <SetItemImage
        onClick={handleClick}
        src={getImageSrc(setItem, collectionItem)}
        alt={setItem.name}
        width={imageDimensions.width}
        height={imageDimensions.height}
        isComplete={setItem.completed}
        loading="lazy"
      />
      <SetItemName>{setItem.name}</SetItemName>
      {setItem.secondLine && <SetItemName>{setItem.secondLine}</SetItemName>}
      {showModal && collectionItem && (
        <CoinCardModal
          coin={collectionItem}
          showModal={showModal}
          setShowModal={setShowModal}
          closeRerouteOverride={Routes.Sets}
        />
      )}
    </SetItemWrapper>
  );
};

const SetItemWrapper = styled.div`
  padding: 0.5rem;
`;

const SetItemName = styled.p`
  font-size: clamp(0.8rem, 2vw + 0.25rem, 1.1rem);
  margin: 0;
  min-width: 5rem;

  @media (max-width: 35em) {
    max-width: 50%;
    text-align: center;
    justify-self: center;
    align-self: center;
  }
`;

const SetItemImage = styled.img<{ isComplete?: boolean }>`
  ${(props) =>
    props.isComplete &&
    css`
      cursor: pointer;
      &:hover {
        filter: brightness(50%);
        transform: scale(1.05);
        transition: 0.5s;
      }
    `}
`;
