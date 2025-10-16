import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { SetData } from '../../assets/SetData';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useContext, useEffect } from 'react';
import { SetContext } from './SetContext';
import { CoinSet, SetStatus } from './Sets.typess';
import { SingleSetItem } from './SingleSetItem';
import { Routes } from '../../shared/utils/router';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { ENABLE_SET_ACCORDIONS, ENABLE_SET_CATEGORIES } from '../../config';
import styled, { css } from 'styled-components';

// TODO: This should be resolved dynamically from the SetData.
const getSetCategories = () => {
  const romanSets = SetData.filter((set) => set.category === 'Rome');
  const greekSets = SetData.filter((set) => set.category === 'Greek');
  const other = SetData.filter((set) => set.category !== 'Rome' && set.category !== 'Greek');

  return [
    { name: 'Ancient Rome', sets: romanSets },
    { name: 'Ancient Greece', sets: greekSets },
    { name: 'Other', sets: other },
  ];
};

const getSetStatus = (set: CoinSet) => {
  if (set.items.every((item) => !item.completed)) {
    return SetStatus.NotStarted;
  }

  if (set.items.every((item) => item.completed)) {
    return SetStatus.Complete;
  }

  return SetStatus.InProgress;
};

const getStatusTagColour = (status: SetStatus) => {
  switch (status) {
    case SetStatus.NotStarted:
      return 'var(--scroll-track-grey)';
    case SetStatus.Complete:
      return 'var(--complete-green)';
    default:
    case SetStatus.InProgress:
      return 'var(--incomplete-red)';
  }
};

// TODO: Clean up the messy styles here.
export const Sets = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Sets);
  }, [setSelectedRoute]);

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const maxAccordionWidth = isMediumScreenOrLarger ? '80%' : '95%';
  const setContext = useContext(SetContext);

  const handleSetChange = (setName: string) => {
    if (setContext.openSets.includes(setName)) {
      setContext.closeSet(setName);
    } else {
      setContext.openSet(setName);
    }
  };

  const ListOfSets = (sets: CoinSet[]) => {
    return sets.map((set) => {
      if (!set.active) {
        return;
      }

      const setStatus = getSetStatus(set);
      return (
        <SetAccordionWrapper key={set.name} $withBottomPadding={!ENABLE_SET_ACCORDIONS}>
          <Accordion
            expanded={!ENABLE_SET_ACCORDIONS || setContext.openSets.includes(set.name)}
            onChange={() => handleSetChange(set.name)}
            sx={{
              color: 'var(--white)',
              backgroundColor: 'var(--deep-black)',
              boxShadow: 'none',
              maxWidth: maxAccordionWidth,
              justifyContent: 'center',
              justifySelf: 'center',
            }}
          >
            <AccordionSummary
              expandIcon={
                ENABLE_SET_ACCORDIONS && (
                  <>
                    <FontAwesomeIcon icon={faChevronDown} color="white" size="2x" />
                  </>
                )
              }
              sx={{ padding: '0.5rem 1rem' }}
            >
              <SetAccordionHeader>
                <SetTitle>{set.name}</SetTitle>
                <CompletionStatusTag $setStatus={setStatus}>{setStatus}</CompletionStatusTag>
              </SetAccordionHeader>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0', paddingBottom: '1rem' }}>
              {set.descriptionParagraphs.map((paragraph) => (
                <SetDescription key={paragraph}>{paragraph}</SetDescription>
              ))}
              <SetSeparator />
              <SetItemsWrapper>
                {set.items.map((item) => (
                  <SingleSetItem key={item.name} setItem={item} />
                ))}
              </SetItemsWrapper>
            </AccordionDetails>
          </Accordion>
        </SetAccordionWrapper>
      );
    });
  };

  return (
    <PageWrapper>
      <HeaderText>Collection Sets</HeaderText>
      <HeaderSeparator $noSpacing />
      <HeaderParagraphWrapper>
        <HeaderParagraph>
          This page tracks the "sets" of coins that the Niho Collection aims to complete. These sets
          track historical moments, dynasties and themes, and act as the primary goals for the
          future of the collection.
        </HeaderParagraph>
      </HeaderParagraphWrapper>
      <SetsHeaderSeparator />
      {ENABLE_SET_CATEGORIES
        ? getSetCategories().map((category) => (
            <div key={category.name}>
              <HeaderText>{category.name}</HeaderText>
              <HeaderSeparator />
              {!isMediumScreenOrLarger && <br />}
              {ListOfSets(category.sets)}
            </div>
          ))
        : ListOfSets(SetData)}
    </PageWrapper>
  );
};

/***********************************
 *             Header              *
 ***********************************/

const HeaderParagraph = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 50%;

  @media (max-width: 100em) {
    max-width: 80%;
  }
`;

const HeaderParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetsHeaderSeparator = styled.div`
  margin: 2rem 0 1rem 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 80%;
  justify-self: center;
`;

/***********************************
 *             Accordion           *
 ***********************************/

const SetAccordionWrapper = styled.div<{ $withBottomPadding?: boolean }>`
  padding: 0.2rem;

  ${(props) =>
    props.$withBottomPadding &&
    css`
      padding-bottom: 1rem;
    `}
`;

const SetAccordionHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.5rem;

  width: 98%;

  @media (max-width: 35em) {
    width: 100%;
  }
`;

const SetTitle = styled.h3`
  font-size: clamp(1rem, 3vw + 0.5rem, 1.8rem);
  margin: 0;
  font-weight: 500;
`;

const CompletionStatusTag = styled.div<{ $setStatus: SetStatus }>`
  margin: 0.5rem;
  padding: 0;
  border-radius: 0.3rem;
  padding: 0.1rem 0.3rem;
  background-color: var(--incomplete-red);
  width: fit-content;
  justify-self: center;

  background-color: ${({ $setStatus }) => getStatusTagColour($setStatus)};
`;

/***********************************
 *        Accordion Details        *
 ***********************************/

const SetDescription = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 90%;
  margin: 0 1rem 0.5rem;
`;

const SetSeparator = styled.div`
  margin: 2rem 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 97%;
  justify-self: center;

  @media (max-width: 35em) {
    min-width: 90%;
  }
`;

const SetItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 100em) {
    max-width: 90%;
    justify-self: center;
  }
`;
