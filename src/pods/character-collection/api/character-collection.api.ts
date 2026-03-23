import {
  CharacterCollectionResponseApi,
} from './character-collection.api-model';

const url = 'http://localhost:3000/api/character';

export const getCharacterCollection = async (
  page = 1,
  search = ''
): Promise<CharacterCollectionResponseApi> => {
  const params = new URLSearchParams();

  params.set('page', String(page));

  if (search.trim()) {
    params.set('name', search);
  }

  const response = await fetch(`${url}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Error loading character collection');
  }

  return response.json();
};