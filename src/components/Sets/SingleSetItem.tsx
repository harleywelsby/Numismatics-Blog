import { SetItem } from './Sets.Types';
import { SetItemName, SetItemWrapper } from './Sets.styles';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';

const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 90, height: 90 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 150, height: 150 };
  }
};

export const SingleSetItem = ({ name, secondLine, imageUrl }: SetItem) => {
  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const imageDimensions = getImageDimensions(screenSize);

  return (
    <SetItemWrapper>
      <img
        src={imageUrl}
        alt={name}
        width={imageDimensions.width}
        height={imageDimensions.height}
        loading="lazy"
      />
      <SetItemName>{name}</SetItemName>
      {secondLine && <SetItemName>{secondLine}</SetItemName>}
    </SetItemWrapper>
  );
};
