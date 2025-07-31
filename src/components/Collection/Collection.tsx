import { useContext, useEffect, useState } from 'react';
import {
  FilterSection,
  FilterItem,
  FilterLabel,
  FilterSelectBox,
  FilterCheckboxWrapper,
  FilterCheckbox,
  CoinCardGrid,
  SearchBox,
  FilterAccordionHeader,
  AccordionSeparator,
} from './Collection.styles';
import {
  ActiveSortTypes,
  ApplyDataFilters,
  GetAuthorityGroups,
  SortCollectionData,
} from './utils/FilterHelpers';
import { CoinCard } from './CoinCard/CoinCard';
import { CollectionData } from '../../assets/CollectionData';
import { SortType } from './Collection.types';
import { PageWrapper, HeaderText, HeaderSeparator } from '../../shared/styles/sharedStyles';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Routes } from '../../shared/utils/router';
import { CollectionFilterStateContext } from './CollectionFilterState/CollectionFilterStateContext';
import { useMediaQuery } from 'react-responsive';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const CollectionV2 = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: '65em' });
  const isMediumScreen = useMediaQuery({ minWidth: '65em', maxWidth: '100em' });
  const [search, setSearch] = useState('');

  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Collection);
  }, [setSelectedRoute]);

  const {
    authorityFilter,
    setAuthorityFilter,
    sortType,
    setSortType,
    hideLowGrade,
    setHideLowGrade,
  } = useContext(CollectionFilterStateContext);

  // Prepare the collection data
  const filteredCollectionData = ApplyDataFilters(
    CollectionData,
    authorityFilter,
    hideLowGrade,
    search,
  );
  SortCollectionData(filteredCollectionData, sortType);

  // Dynamically fetch the filter options
  const authorityFilterOptions = GetAuthorityGroups(CollectionData.map((x) => x.authority));

  // If only 1 or 2 items are in the list, adjust the columns.
  const getColumnOverride = () => {
    let columns = '33% 33% 33%';

    if (isSmallScreen) {
      columns = '100%';
    } else if (isMediumScreen) {
      columns = '50% 50%';
    }

    switch (filteredCollectionData.length) {
      case 1:
        return '100%';
      case 2:
        return isSmallScreen ? columns : '50% 50%';
      default:
        return columns;
    }
  };

  return (
    <PageWrapper>
      <HeaderText>The Collection</HeaderText>
      <HeaderSeparator $noSpacing />
      <FilterSection>
        <SearchBox
          type="text"
          placeholder="Search collection..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FilterSection>
      <Accordion
        sx={{
          color: 'var(--white)',
          backgroundColor: 'var(--deep-black)',
          boxShadow: 'none',
          justifyContent: 'center',
          justifySelf: 'center',
          borderRadius: '10px',
          width: isSmallScreen ? '80%' : '21.5rem',
        }}
      >
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faChevronDown} color="white" size="2x" />}
          sx={{ padding: '0rem 1rem' }}
        >
          <FilterAccordionHeader>Filter Options</FilterAccordionHeader>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <AccordionSeparator />
      <CoinCardGrid $columnsOverride={getColumnOverride()}>
        {filteredCollectionData.map((x) => (
          <CoinCard key={x.id} coin={x} />
        ))}
      </CoinCardGrid>
    </PageWrapper>
  );
};
