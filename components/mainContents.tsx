import React from 'react';
import { Article } from 'domain/type';

type Props = {
  article: Article;
};

export default function MainContents(props: Props) {
  const { article } = props;
  return (
    <div
      id="mainContent"
      dangerouslySetInnerHTML={{
        __html: `${article.content}`,
      }}
      className={`blog mx-3 bg-gray-100`}
    />
  );
}
