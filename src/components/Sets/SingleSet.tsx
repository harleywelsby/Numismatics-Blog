import { CoinSet } from './Sets.Types';
import { SetDescription, SetItemsWrapper, SetSeparator, SetWrapper } from './Sets.styles';
import { SingleSetItem } from './SingleSetItem';

// TODO
//const SetsWithCustomLayouts = ['Severan Silver'];

export const SingleSet = ({ description, items }: CoinSet) => {
  //const hasCustomLayout = SetsWithCustomLayouts.includes(name);

  return (
    <SetWrapper>
      <SetDescription>{description}</SetDescription>
      <SetSeparator />
      <SetItemsWrapper>
        {items.map((item) => (
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
    </SetWrapper>
  );
};
