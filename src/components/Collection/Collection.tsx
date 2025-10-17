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
import {
  PageWrapper,
  HeaderText,
  HeaderSeparator,
  BackToTopButton,
} from '../../shared/styles/sharedStyles';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Routes } from '../../shared/utils/router';
import { CollectionFilterStateContext } from './CollectionFilterState/CollectionFilterStateContext';
import { useMediaQuery } from 'react-responsive';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { getColumnOverride } from './utils/GridHelpers';
import { SortType } from './Collection.types';

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

  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setShowBackToTopButton(
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50,
      );
    };
  }, []);

  return (
    <PageWrapper>
      {showBackToTopButton && (
        <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faAngleDoubleUp} />
          Back to Top
        </BackToTopButton>
      )}
      <HeaderText $primaryColor>The Collection</HeaderText>
      <HeaderSeparator $primaryColor $noSpacing />
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
      <CoinCardGrid
        $columnsOverride={getColumnOverride(
          isSmallScreen,
          isMediumScreen,
          filteredCollectionData.length,
        )}
      >
        {filteredCollectionData.map((x) => (
          <CoinCard key={x.id} coin={x} />
        ))}
      </CoinCardGrid>
    </PageWrapper>
  );
};
