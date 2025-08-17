import { useEffect, useState } from 'react';
import { CollectionData } from '../../assets/CollectionData';
import {
  CoinImage,
  DescriptionText,
  ImageWrapper,
  ShowcaseCard,
  StepButton,
  StepButtonStack,
  Subtitle,
  Title,
} from './Showcase.styles';

const currentShowcaseIds = [26, 25, 17];
const showcaseDescriptions: Record<number, string> = {
  26: "This drachm was struck by Antigonus I 'The One-Eyed', one of Alexander the Great's generals and successors. The reverse reads 'ΑΛΕΞΑΝΔΡΟΥ', meaning 'of Alexander'. Antigonus died in combat in 301 BC at age 81, while fighting against a coalition of Alexander's other generals.",
  25: `The last of the "Five Good Emperors", Marcus Aurelius is best known for his contributions to Stoic philosophy, most notably "Meditations". This coin features the personification of happiness, Felicitas, on the reverse. Here, Felicitas likely represents one's "inner happiness", a key tenet of Stoicism.`,
  17: 'Elagabalus rose to power at age 14, after his grandmother, Julia Maesa, orchestrated a coup against the emperor Macrinus. The reverse features Victory, and reads "VICTOR ANTONINI AVG", meaning "Victory to Emperor Antoninus" (Elagabalus is a nickname, after the sun god he worshipped). This type commemorated his victory over Macrinus in the Battle of Antioch, and restoration of his dynasty to the throne.',
};

const getShowcaseDescription = (id: number): string => {
  return showcaseDescriptions[id] || 'No description available.';
};

const currentShowcase = CollectionData.filter((x) => currentShowcaseIds.includes(x.id)).sort(
  (a, b) => b.id - a.id,
);

export const Showcase = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [lastRerender, setLastRerender] = useState(Date.now());
  const [itemHasBeenClicked, setItemHasBeenClicked] = useState(false);

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
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentItem, itemHasBeenClicked, lastRerender]);

  const handleStepButtonClick = (index: number) => {
    setCurrentItem(index);
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
      <DescriptionText id="description">
        {getShowcaseDescription(currentShowcase[currentItem]?.id)}
      </DescriptionText>
    </ShowcaseCard>
  );
};
