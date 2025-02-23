import { useMediaQuery } from 'react-responsive';
import { CardText, CardThumbnail, CardWrapper } from './Collection.styles';

export type CardProps = {
  title: string;
  imagePath: string;
};

export const Card = ({ title, imagePath }: CardProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const thumbnailDimensions = isBigScreen
    ? { width: 500, height: 250 }
    : { width: 300, height: 150 };

  return (
    <CardWrapper>
      <CardThumbnail
        src={imagePath}
        width={thumbnailDimensions.width}
        height={thumbnailDimensions.height}
      />
      <CardText>{title}</CardText>
    </CardWrapper>
  );
};
