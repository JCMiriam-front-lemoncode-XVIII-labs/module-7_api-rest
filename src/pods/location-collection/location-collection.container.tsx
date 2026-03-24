import * as React from 'react';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer = () => {
  const {
    locationCollection,
    currentPage,
    totalPages,
    search,
    setSearch,
    loadLocationCollection,
  } = useLocationCollection();

  React.useEffect(() => {
    loadLocationCollection(1, '');
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
    loadLocationCollection(1, value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      loadLocationCollection(currentPage - 1, search);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      loadLocationCollection(currentPage + 1, search);
    }
  };

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      currentPage={currentPage}
      totalPages={totalPages}
      search={search}
      onSearch={handleSearch}
      onPreviousPage={handlePreviousPage}
      onNextPage={handleNextPage}
    />
  );
};