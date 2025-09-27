export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type SearchParamsProm = Promise<SearchParams>;
