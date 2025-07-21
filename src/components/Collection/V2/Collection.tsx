import { useState } from 'react';
import { CollectionDataVNext } from '../../../assets/CollectionData';
import { PageWrapper, HeaderText, HeaderSeparator } from '../../../shared/styles/sharedStyles';
import {
  FilterSection,
  FilterItem,
  FilterLabel,
  FilterSelectBox,
  FilterCheckboxWrapper,
  FilterCheckbox,
  CoinCardGrid,
} from '../Collection.styles';
import { SortType } from '../Collection.types';
import {
  ActiveSortTypes,
  ApplyDataFilters,
  GetAuthorityGroups,
  SortCollectionData,
} from './utils/FilterHelpers';
import { CoinCard } from './CoinCard';

export const CollectionV2 = () => {
  const [authorityFilter, setAuthorityFilter] = useState('All');
  const [sortType, setSortType] = useState(SortType.Latest);
  const [hideLowGrade, setHideLowGrade] = useState(true);

  // Prepare the collection data
  const filteredCollectionData = ApplyDataFilters(
    CollectionDataVNext,
    authorityFilter,
    hideLowGrade,
  );
  SortCollectionData(filteredCollectionData, sortType);

  // Dynamically fetch the filter options
  const authorityFilterOptions = GetAuthorityGroups(filteredCollectionData.map((x) => x.authority));

  // If only 1 or 2 items are in the list, adjust the columns.
  const getColumnOverride = () => {
    switch (filteredCollectionData.length) {
      case 1:
        return '100%';
      case 2:
        return '50% 50%';
      default:
        return;
    }
  };

  return (
    <PageWrapper>
      <HeaderText>The Collection</HeaderText>
      <HeaderSeparator $noSpacing />
      <FilterSection>
        <FilterItem>
          <FilterLabel>Filter by:</FilterLabel>
          <FilterSelectBox
            name="authority"
            value={authorityFilter}
            onChange={(e) => setAuthorityFilter(e.target.value)}
          >
            <option>All</option>
            {authorityFilterOptions.map((group) => (
              <option key={group.name} value={group.name}>
                {group.name}
              </option>
            ))}
          </FilterSelectBox>
        </FilterItem>
        <FilterItem>
          <FilterLabel>Sort by:</FilterLabel>
          <FilterSelectBox
            name="sortType"
            value={sortType}
            onChange={(e) => setSortType(e.target.value as SortType)}
          >
            {ActiveSortTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </FilterSelectBox>
        </FilterItem>
      </FilterSection>
      <FilterSection>
        <FilterCheckboxWrapper>
          <FilterCheckbox
            type="checkbox"
            checked={hideLowGrade}
            onChange={(e) => setHideLowGrade(e.target.checked)}
          />
          <FilterLabel>Hide low-grade coins</FilterLabel>
        </FilterCheckboxWrapper>
      </FilterSection>
      <CoinCardGrid $columnsOverride={getColumnOverride()}>
        {filteredCollectionData.map((x) => (
          <CoinCard key={x.id} coin={x} />
        ))}
      </CoinCardGrid>
    </PageWrapper>
  );
};
