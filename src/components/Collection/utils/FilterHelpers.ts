import { getCleanMintDate } from '../../../shared/utils/dateHelper';
import { AuthorityGroup, CollectionItem, SortType } from '../Collection.types';

export const AuthorityGroups: AuthorityGroup[] = [
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

export const GetAuthorityGroups = (authorities: string[]): AuthorityGroup[] => {
  return AuthorityGroups.filter((group) =>
    group.includedAuthorities.some((authority) => authorities.includes(authority)),
  );
};

export const ApplyDataFilters = (
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

export const SortCollectionData = (data: CollectionItem[], sortType: SortType) => {
  // Always sort by ID first, so that the latest additions are at the top.
  data.sort((a, b) => {
    return b.id - a.id;
  });

  // Then, sort by the selected sort type.
  data.sort((a, b) => {
    switch (sortType) {
      case SortType.MintDateAsc:
        return getCleanMintDate(a.mint.date) - getCleanMintDate(b.mint.date);
      case SortType.MintDateDesc:
        return getCleanMintDate(b.mint.date) - getCleanMintDate(a.mint.date);
      case SortType.Rulers:
        if (a.ruler < b.ruler) {
          return -1;
        } else if (a.ruler > b.ruler) {
          return 1;
        }
        return 0;
      case SortType.Best:
        return b.grade - a.grade;
      case SortType.Latest:
      default:
        return b.id - a.id;
    }
  });

  return data;
};

export const ActiveSortTypes: SortType[] = [
  SortType.Latest,
  SortType.Best,
  SortType.MintDateAsc,
  SortType.MintDateDesc,
  SortType.Rulers,
];
