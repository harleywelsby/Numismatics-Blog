import { CoinSet } from './Sets.Types';
import {
  CompletionStatusTag,
  SetDescription,
  SetItemsWrapper,
  SetTitle,
  SetWrapper,
} from './Sets.styles';
import { SingleSetItem } from './SingleSetItem';

//const SetsWithCustomLayouts = ['Severan Silver'];

export const SingleSet = ({ name, description, items }: CoinSet) => {
  const isComplete = items.every((item) => item.completed);
  //const hasCustomLayout = SetsWithCustomLayouts.includes(name);

  return (
    <SetWrapper>
      <SetTitle>{name}</SetTitle>
      <CompletionStatusTag $completed={isComplete}>
        {isComplete ? 'Complete' : 'In Progress'}
      </CompletionStatusTag>
      <SetDescription>{description}</SetDescription>

      <SetItemsWrapper>
        {items.map((item) => {
          return (
            <SingleSetItem
              name={item.name}
              secondLine={item.secondLine}
              imageUrl={item.imageUrl}
              completed={item.completed}
              collectionId={item.collectionId}
            />
          );
        })}
      </SetItemsWrapper>
    </SetWrapper>
  );
};
