export enum CategoryFilter {
  ALL = 'ALL',
  FAVORITE = 'FAVORITE'
}

export type Category = {
  id: string;
  name: string;
  favorite: boolean;
};

export type Post = {
  id: string;
  description: string;
  date: string;
  categories: string[];
};
