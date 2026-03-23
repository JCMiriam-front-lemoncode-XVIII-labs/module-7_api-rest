import { Character } from './character.api-model';

const url = 'http://localhost:3000/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${url}/${id}`);

  if (!response.ok) {
    throw new Error('Error loading character');
  }

  return response.json();
};

export const saveCharacter = async (
  id: string,
  character: Partial<Character>
): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });

  return response.ok;
};