import { EpisodeCollectionResponseApi } from './episode-collection.api-model';

const url = 'http://localhost:3000/api/episode';

export const getEpisodeCollection = async (
  page = 1,
  search = ''
): Promise<EpisodeCollectionResponseApi> => {
  const params = new URLSearchParams();

  params.set('page', String(page));

  if (search.trim()) {
    params.set('name', search);
  }

  const response = await fetch(`${url}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Error loading episode collection');
  }

  return response.json();
};