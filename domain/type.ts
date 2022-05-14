export interface Article {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  category: string;
  tags: string[];
  image?: string;
}
