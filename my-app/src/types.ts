interface ITag {
  term: string;
  AAT_URL: string;
  Wikidata_URL: string;
}

export interface ICard {
  objectID: number;
  primaryImage: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  artistNationality: string;
  dimensions: string;
  medium: string;
  tags: ITag[] | null;
  title: string;
  objectURL: string;
}
