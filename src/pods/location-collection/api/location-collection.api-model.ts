export interface LocationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationCollectionResponseApi {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  results: LocationEntityApi[];
}