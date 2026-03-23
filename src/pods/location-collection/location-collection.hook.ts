import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocationCollection } from './api/location-collection.api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<LocationEntityVm[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [search, setSearch] = React.useState('');

  const loadLocationCollection = async (page = 1, searchValue = search) => {
    const result = await getLocationCollection(page, searchValue);
    setLocationCollection(mapToCollection(result.results, mapFromApiToVm));
    setCurrentPage(page);
    setTotalPages(result.info.pages);
  };

  return {
    locationCollection,
    currentPage,
    totalPages,
    search,
    setSearch,
    loadLocationCollection,
  };
};