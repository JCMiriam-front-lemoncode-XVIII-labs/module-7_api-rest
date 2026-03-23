import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { getEpisodeCollection } from './api/episode-collection.api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeEntityVm[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [search, setSearch] = React.useState('');

  const loadEpisodeCollection = async (page = 1, searchValue = search) => {
    const result = await getEpisodeCollection(page, searchValue);
    setEpisodeCollection(mapToCollection(result.results, mapFromApiToVm));
    setCurrentPage(page);
    setTotalPages(result.info.pages);
  };

  return {
    episodeCollection,
    currentPage,
    totalPages,
    search,
    setSearch,
    loadEpisodeCollection,
  };
};