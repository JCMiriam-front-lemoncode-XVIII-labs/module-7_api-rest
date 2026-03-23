import * as React from 'react';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer = () => {
  const {
    episodeCollection,
    currentPage,
    totalPages,
    search,
    setSearch,
    loadEpisodeCollection,
  } = useEpisodeCollection();

  React.useEffect(() => {
    loadEpisodeCollection(1, '');
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
    loadEpisodeCollection(1, value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      loadEpisodeCollection(currentPage - 1, search);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      loadEpisodeCollection(currentPage + 1, search);
    }
  };

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      currentPage={currentPage}
      totalPages={totalPages}
      search={search}
      onSearch={handleSearch}
      onPreviousPage={handlePreviousPage}
      onNextPage={handleNextPage}
    />
  );
};