import {
  CharacterEntityApi,
  CharacterCollectionResponseApi,
} from './character-collection.api-model';

const url = 'http://localhost:3000/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error loading character collection');
  }

  const data: CharacterCollectionResponseApi = await response.json();
  return data.results;
};