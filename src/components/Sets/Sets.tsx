import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { HeaderParagraph, HeaderParagraphWrapper, SetSeparator } from './Sets.styles';
import { SingleSet } from './SingleSet';
import { SetData } from '../../assets/SetData';

export const Sets = () => {
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
      <SetSeparator />
      {SetData.map((set) => (
        <>
          <SingleSet
            key={set.name}
            name={set.name}
            description={set.description}
            items={set.items}
          />
          <SetSeparator />
        </>
      ))}
    </PageWrapper>
  );
};
