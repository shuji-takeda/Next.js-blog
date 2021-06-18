export interface Article {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  category: string[];
}

export interface Contents {
  contents: Article[];
}
