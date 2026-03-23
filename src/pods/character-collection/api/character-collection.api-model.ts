export interface CharacterEntityApi {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

export interface CharacterCollectionResponseApi {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: CharacterEntityApi[];
}