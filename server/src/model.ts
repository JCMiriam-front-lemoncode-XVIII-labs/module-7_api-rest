export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

export interface CharacterListResponse {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: Character[];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface LocationListResponse {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: Location[];
}

export interface EpisodeListResponse {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: Episode[];
}
