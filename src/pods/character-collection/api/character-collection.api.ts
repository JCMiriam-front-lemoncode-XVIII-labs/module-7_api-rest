import {
  CharacterEntityApi,
  CharacterCollectionResponseApi,
} from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  if (!response.ok) {
    throw new Error('Error loading character collection');
  }

  const data: CharacterCollectionResponseApi = await response.json();
  return data.results;
};