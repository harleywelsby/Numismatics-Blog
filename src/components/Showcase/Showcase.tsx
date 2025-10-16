import { useEffect, useState } from 'react';
import { CollectionData } from '../../assets/CollectionData';
import { CoinCardModal } from '../Collection/CoinCard/CoinCardModal';
import styled, { css } from 'styled-components';

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

const ShowcaseCard = styled.div`
  margin: 2rem 0;
  padding: 2rem 1rem;

  border-radius: 10px;

  background-color: var(--deep-black);

  justify-content: center;
  align-items: center;
  justify-self: center;

  @media (min-width: 100em) {
    width: 60%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 35em) {
    padding: 0;
  }
`;

const CoinImage = styled.img`
  width: 50%;
`;

const Title = styled.h2`
  color: var(--title-orange);
  font-family: 'Times New Roman', Times, serif;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0 0 0;

  @media (max-width: 35em) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;

  @media (max-width: 35em) {
    font-size: 1rem;
  }
`;

const StepButtonStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const StepButton = styled.button<{ isSelected: boolean }>`
  background-color: var(--soft-white);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--title-orange);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--title-orange);
    `}
`;

const DetailsButton = styled.button`
  background-color: var(--deep-black);
  color: var(--white);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: clamp(0.5rem, 3vw + 0.1rem, 1rem);
  display: flex;
  gap: 0.5rem;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--scroll-track-grey);
  }
`;

const DetailsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
