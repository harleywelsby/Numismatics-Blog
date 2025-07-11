import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import {
  CompletionStatusTag,
  HeaderParagraph,
  HeaderParagraphWrapper,
  SetAccordionHeader,
  SetAccordionWrapper,
  SetDescription,
  SetItemsWrapper,
  SetSeparator,
  SetsHeaderSeparator,
  SetTitle,
} from './Sets.styles';
import { SetData } from '../../assets/SetData';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { SetContext } from './SetContext';
import { CoinSet, SetStatus } from './Sets.Types';
import { SingleSetItem } from './SingleSetItem';

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

// TODO: Clean up the messy styles here.
export const Sets = () => {
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
      const setStatus = getSetStatus(set);
      return (
        <SetAccordionWrapper key={set.name}>
          <Accordion
            expanded={setContext.openSets.includes(set.name)}
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
              expandIcon={<FontAwesomeIcon icon={faChevronDown} color="white" size="2x" />}
              sx={{ padding: '0.5rem 1rem' }}
            >
              <SetAccordionHeader>
                <SetTitle>{set.name}</SetTitle>
                <CompletionStatusTag $setStatus={setStatus}>{setStatus}</CompletionStatusTag>
              </SetAccordionHeader>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0', paddingBottom: '1rem' }}>
              <SetDescription>{set.description}</SetDescription>
              <SetSeparator />
              <SetItemsWrapper>
                {set.items.map((item) => (
                  <SingleSetItem
                    key={item.collectionId || item.name}
                    name={item.name}
                    secondLine={item.secondLine}
                    imageUrl={item.imageUrl}
                    completed={item.completed}
                    collectionId={item.collectionId}
                  />
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
          aim to combine the individual stories of each coin into a bigger picture, which can tell
          us something novel about the time period and characters in power.
          <br />
          <br />
          Not all coins in the collection are part of a set, and some may appear in multiple sets.
          You'll see that very few sets are complete. Coin collecting is a life-long journey, and
          these sets are personal goals for the future growth of the collection.
        </HeaderParagraph>
      </HeaderParagraphWrapper>
      <SetsHeaderSeparator />
      {getSetCategories().map((category) => (
        <div key={category.name}>
          <HeaderText>{category.name}</HeaderText>
          <HeaderSeparator />
          {!isMediumScreenOrLarger && <br />}
          {ListOfSets(category.sets)}
        </div>
      ))}
    </PageWrapper>
  );
};
