import { useEffect, useState } from 'react';
import { CollectionData } from '../../assets/CollectionData';
import {
  CoinImage,
  DetailsButton,
  DetailsButtonWrapper,
  ImageWrapper,
  ShowcaseCard,
  StepButton,
  StepButtonStack,
  Subtitle,
  Title,
} from './Showcase.styles';
import { CoinCardModal } from '../Collection/CoinCard/CoinCardModal';

const currentShowcaseIds = [30, 26, 25];
const currentShowcase = CollectionData.filter((x) => currentShowcaseIds.includes(x.id)).sort(
  (a, b) => b.id - a.id,
);

export const Showcase = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [lastRerender, setLastRerender] = useState(Date.now());
  const [itemHasBeenClicked, setItemHasBeenClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleRotation = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.style.opacity = '0';
    element.animate(
      {
        opacity: [0, 1],
      },
      {
        duration: 500,
        fill: 'forwards',
      },
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastRerender < Date.now() - 5000 && !itemHasBeenClicked) {
        if (currentItem === currentShowcase.length - 1) {
          setCurrentItem(0);
        } else {
          setCurrentItem((prevItem) => prevItem + 1);
        }

        handleRotation('image');
        handleRotation('title');
        handleRotation('subtitle');
        handleRotation('description');
        setLastRerender(Date.now());
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentItem, itemHasBeenClicked, lastRerender]);

  const handleStepButtonClick = (index: number) => {
    setCurrentItem(index);
    setItemHasBeenClicked(true);
  };

  const handleDetailsButtonClick = () => {
    setShowModal(true);
    setItemHasBeenClicked(true);
  };

  return (
    <ShowcaseCard>
      <ImageWrapper id="image">
        <CoinImage
          src={currentShowcase[currentItem]?.obverse.imagePath}
          alt={currentShowcase[currentItem]?.title}
        />
        <CoinImage
          src={currentShowcase[currentItem]?.reverse.imagePath}
          alt={currentShowcase[currentItem]?.title}
        />
      </ImageWrapper>
      <Title id="title">{currentShowcase[currentItem]?.title}</Title>
      <Subtitle id="subtitle">{`${currentShowcase[currentItem]?.mint.location} (${currentShowcase[currentItem]?.mint.date})`}</Subtitle>
      <StepButtonStack>
        {currentShowcaseIds.map((id) => (
          <StepButton
            key={id}
            isSelected={currentItem === currentShowcase.findIndex((item) => item.id === id)}
            onClick={() =>
              handleStepButtonClick(currentShowcase.findIndex((item) => item.id === id))
            }
          />
        ))}
      </StepButtonStack>
      <DetailsButtonWrapper>
        <DetailsButton onClick={handleDetailsButtonClick}>View Details</DetailsButton>
      </DetailsButtonWrapper>
      <CoinCardModal
        coin={currentShowcase[currentItem]}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </ShowcaseCard>
  );
};
