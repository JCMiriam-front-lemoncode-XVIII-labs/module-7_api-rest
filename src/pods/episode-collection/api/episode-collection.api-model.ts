export interface EpisodeEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface EpisodeCollectionResponseApi {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: EpisodeEntityApi[];
}