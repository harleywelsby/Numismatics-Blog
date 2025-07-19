import { CollectionData } from '../../assets/CollectionData';
import { CoinCard } from './CoinCard';
import {
  CoinCardGrid,
  FilterCheckbox,
  FilterCheckboxWrapper,
  FilterItem,
  FilterLabel,
  FilterSection,
  FilterSelectBox,
  SearchBar,
} from './Collection.styles';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { useEffect, useState } from 'react';
import { AuthorityGroup, CollectionItem, SortType } from './Collection.types';
import { getCleanMintDate } from '../../shared/utils/dateHelper';

const AuthorityGroups: AuthorityGroup[] = [
  {
    name: 'Ancient Greece',
    includedAuthorities: ['Kingdom of Macedon', 'Seleucid Empire', 'Macedonia'],
  },
  {
    name: 'Roman Empire',
    includedAuthorities: ['Roman Empire', 'Gallic Empire'],
  },
  {
    name: 'United Kingdom',
    includedAuthorities: ['United Kingdom'],
  },
];

const ApplyDataFilters = (
  data: CollectionItem[],
  authorityFilter: string,
  hideLowGrade: boolean,
) => {
  let filteredData = data;

  const currentAuthorityGroup = AuthorityGroups.find((x) => x.name === authorityFilter);
  if (authorityFilter !== 'All' && currentAuthorityGroup) {
    filteredData = filteredData.filter((x) =>
      currentAuthorityGroup.includedAuthorities.includes(x.authority),
    );
  }

  if (hideLowGrade) {
    filteredData = filteredData.filter((x) => x.grade >= 4); // Very Fine (VF) or better
  }

  return filteredData;
};

const SortCollectionData = (data: CollectionItem[], sortType: SortType) => {
  // Always sort by ID first, so that the latest additions are at the top.
  data.sort((a, b) => {
    return b.id - a.id;
  });

  // Then, sort by the selected sort type.
  data.sort((a, b) => {
    switch (sortType) {
      case SortType.MintDateAsc:
        return getCleanMintDate(a.mintDate) - getCleanMintDate(b.mintDate);
      case SortType.MintDateDesc:
        return getCleanMintDate(b.mintDate) - getCleanMintDate(a.mintDate);
      case SortType.Rulers:
        if (a.ruler < b.ruler) {
          return -1;
        } else if (a.ruler > b.ruler) {
          return 1;
        }
        return 0;
      case SortType.Best:
        return b.grade - a.grade;
      case SortType.Featured:
        if (a.featuredRanking && b.featuredRanking) {
          return (a.featuredRanking || 0) - (b.featuredRanking || 0);
        } else if (a.featuredRanking) {
          return -1; // a is featured, b is not
        } else if (b.featuredRanking) {
          return 1; // b is featured, a is not
        }
        // If neither has a featured ranking, fall back to grade sorting
        return b.grade - a.grade;
      case SortType.Latest:
      default:
        return b.id - a.id;
    }
  });

  return data;
};

export const Collection = () => {
  const [authorityFilter, setAuthorityFilter] = useState('All');
  const [sortType, setSortType] = useState(SortType.Featured);
  const [hideLowGrade, setHideLowGrade] = useState(true);

  const filteredCollectionData = ApplyDataFilters(CollectionData, authorityFilter, hideLowGrade);
  SortCollectionData(filteredCollectionData, sortType);

  // If only 1 or 2 items are in the list, let the columns adjust.
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
            <option>Roman Empire</option>
            <option>Ancient Greece</option>
            <option>United Kingdom</option>
          </FilterSelectBox>
        </FilterItem>
        <FilterItem>
          <FilterLabel>Sort by:</FilterLabel>
          <FilterSelectBox
            name="sortType"
            value={sortType}
            onChange={(e) => setSortType(e.target.value as SortType)}
          >
            <option>Featured</option>
            <option>Highest Grade</option>
            <option>Latest Additions</option>
            <option>Mint Date (ascending)</option>
            <option>Mint Date (descending)</option>
            <option>Rulers (alphabetical)</option>
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
