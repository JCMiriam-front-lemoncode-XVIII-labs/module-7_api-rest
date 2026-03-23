import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [search, setSearch] = React.useState('');

  const loadCharacterCollection = async (page = 1, searchValue = search) => {
    const result = await getCharacterCollection(page, searchValue);

    setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
    setCurrentPage(page);
    setTotalPages(result.info.pages);
  };

  return {
    characterCollection,
    currentPage,
    totalPages,
    search,
    setSearch,
    loadCharacterCollection,
  };
};