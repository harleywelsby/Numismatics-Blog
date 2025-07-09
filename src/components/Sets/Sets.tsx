import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import {
  CompletionStatusTag,
  HeaderParagraph,
  HeaderParagraphWrapper,
  SetAccordionHeader,
  SetAccordionWrapper,
  SetsHeaderSeparator,
  SetTitle,
} from './Sets.styles';
import { SingleSet } from './SingleSet';
import { SetData } from '../../assets/SetData';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { SetContext } from './SetContext';

// TODO: Clean up the messy styles here.
export const Sets = () => {
  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const maxAccordionWidth = isMediumScreenOrLarger ? '80%' : '95%';

  // TODO: Use context to keep sets open/closed after refresh
  const setContext = useContext(SetContext);

  const handleSetChange = (setName: string) => {
    if (setContext.openSets.includes(setName)) {
      setContext.closeSet(setName);
    } else {
      setContext.openSet(setName);
    }
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
      {SetData.map((set) => {
        const isComplete = set.items.every((item) => item.completed);
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
                  <CompletionStatusTag $completed={isComplete}>
                    {isComplete ? 'Complete' : 'In Progress'}
                  </CompletionStatusTag>
                </SetAccordionHeader>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0', paddingBottom: '1rem' }}>
                <SingleSet name={set.name} description={set.description} items={set.items} />
              </AccordionDetails>
            </Accordion>
          </SetAccordionWrapper>
        );
      })}
    </PageWrapper>
  );
};
