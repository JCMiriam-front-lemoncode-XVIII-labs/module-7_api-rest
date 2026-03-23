import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    currentPage,
    totalPages,
    search,
    setSearch,
    loadCharacterCollection,
  } = useCharacterCollection();

  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(1, '');
  }, []);

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    loadCharacterCollection(1, value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      loadCharacterCollection(currentPage - 1, search);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      loadCharacterCollection(currentPage + 1, search);
    }
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      currentPage={currentPage}
      totalPages={totalPages}
      search={search}
      onSearch={handleSearch}
      onPreviousPage={handlePreviousPage}
      onNextPage={handleNextPage}
      onEdit={handleEdit}
    />
  );
};