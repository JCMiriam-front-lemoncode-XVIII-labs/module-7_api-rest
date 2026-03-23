import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!response.ok) throw new Error('Error loading character');

  return response.json();
};

export const saveCharacter = async (character: Character): Promise<boolean> => true;