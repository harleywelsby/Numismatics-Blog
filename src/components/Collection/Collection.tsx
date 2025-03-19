import { CollectionData } from '../../assets/CollectionData';
import { CoinCard } from './CoinCard';
import {
  CoinCardGrid,
  FilterItem,
  FilterLabel,
  FilterSection,
  FilterSelectBox,
} from './Collection.styles';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { useState } from 'react';
import { AuthorityGroup, SortType } from './Collection.types';

const AuthorityGroups: AuthorityGroup[] = [
  {
    name: 'Ancient Greece',
    includedAuthorities: ['Kingdom of Macedon'],
  },
  {
    name: 'Roman Empire',
    includedAuthorities: ['Roman Empire'],
  },
  {
    name: 'United Kingdom',
    includedAuthorities: ['United Kingdom'],
  },
];

export const Collection = () => {
  const [authorityFilter, setAuthorityFilter] = useState('All');
  const [sortType, setSortType] = useState(SortType.Best);

  const currentAuthorityGroup = AuthorityGroups.find((x) => x.name === authorityFilter);
  const filteredCollectionData =
    authorityFilter === 'All'
      ? CollectionData
      : CollectionData.filter((x) =>
          currentAuthorityGroup?.includedAuthorities.includes(x.authority),
        );

  const getCleanMintDate = (mintDate: string) => {
    let result = mintDate;

    // If there's a range of dates, take the lowest possible.
    if (mintDate.includes('-')) {
      const splitDates = result.split('-');
      result = splitDates[0];
    }

    // Remove all non-numeric characters.
    result = result.replace(/\D/g, '');

    // Convert to a number (AD = positive, BC = negative) and return.
    return mintDate.includes('BC') ? -result : +result;
  };

  filteredCollectionData.sort((a, b) => {
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
      default:
        return a.id - b.id;
    }
  });

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
            <option>Best</option>
            <option>Mint Date (ascending)</option>
            <option>Mint Date (descending)</option>
            <option>Rulers (alphabetical)</option>
          </FilterSelectBox>
        </FilterItem>
      </FilterSection>
      <CoinCardGrid>
        {filteredCollectionData.map((x) => (
          <CoinCard
            key={x.id}
            id={x.id}
            title={x.title}
            imgPath={x.imgPath}
            ruler={x.ruler}
            authority={x.authority}
            mintLocation={x.mintLocation}
            mintDate={x.mintDate}
            obverseDescription={x.obverseDescription}
            reverseDescription={x.reverseDescription}
            catalogueNumber={x.catalogueNumber}
          />
        ))}
      </CoinCardGrid>
    </PageWrapper>
  );
};
