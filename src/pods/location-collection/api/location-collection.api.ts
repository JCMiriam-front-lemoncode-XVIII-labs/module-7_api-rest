import { LocationCollectionResponseApi } from './location-collection.api-model';

const url = 'http://localhost:3000/api/location';

export const getLocationCollection = async (
  page = 1,
  search = ''
): Promise<LocationCollectionResponseApi> => {
  const params = new URLSearchParams();

  params.set('page', String(page));

  if (search.trim()) {
    params.set('name', search);
  }

  const response = await fetch(`${url}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Error loading location collection');
  }

  return response.json();
};