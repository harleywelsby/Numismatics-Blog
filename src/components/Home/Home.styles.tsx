import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getFullImagePath } from '../../shared/utils/imageHelper';

export const TextWrapper = styled.div`
  justify-self: center;
  width: 80%;

  @media (min-width: 100em) {
    width: 20%;
  }

  @media (min-width: 35em) {
    width: 60%;
  }
`;

export const HomepageHeader = styled.h2`
  justify-self: center;
  font-size: clamp(1rem, 3vw + 0.25rem, 1.5rem);
  font-weight: 500;
`;

export const HomepageParagraph = styled.p`
  text-align: center;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 3rem;

  margin-top: 2rem;

  @media (max-width: 35em) {
    grid-template-columns: 100%;
    gap: 1rem;
  }
`;

export const CollectionLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Remove default styling */
  color: inherit;
  text-decoration: none;

  border-radius: 15px;
  min-width: 100%;
  min-height: 20vh;

  grid-column: 1;

  background-image: url(${getFullImagePath('/Images/SilverCoinsBackground.jpg')});

  @media (min-width: 35em) {
    &:hover {
      filter: brightness(70%);
    }
  }

  @media (min-width: 35em) {
    grid-column: 1 / 3;
  }
`;

export const LinkButtonText = styled.h2`
  font-size: clamp(1.5rem, 3vw + 0.25rem, 2.5rem);
  margin: 0;
  padding: 0 0 1rem 0;

  white-space: pre-wrap;
`;

export const BlogButton = styled.button`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  border-radius: 15px;
  min-height: 30vh;

  @media (min-width: 35em) {
    &:hover {
      filter: brightness(70%);
    }
  }

  background-image: url(${getFullImagePath('/Images/ComingSoonPlaceholder.jpg')});
  background-size: cover;
`;

export const ShowcaseImage = styled.img`
  padding: 1rem;
`;
