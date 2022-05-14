import { Article } from 'domain/type';

export type AllBlogResponse = {
  contents: Article[];
  totalCount: number;
};
