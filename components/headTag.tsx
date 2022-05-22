import React from 'react';
import Head from 'next/head';

export type MetaData = {
  title?: string;
  description?: string;
  pagePath?: string;
  image?: string;
};

export default function HeadTag(props: MetaData) {
  const defaultUrl = 'https://english.yunomy.com';
  const defaultImg = 'https://english.yunomy.com/static/otehon2.png';
  const defaultTitle = 'Tech Blog | 平凡なエンジニアの何となく書いているブログ';
  const defaultDescription =
    'Java,Js,Tsを戦場としている、フルスタックエンジニアの何気ないブログ。日々の学びだけでなく、筆者の好むエンタメ情報を掲載する';

  const title = props.title ? `${props.title} | ${defaultTitle}` : defaultTitle;
  const description = props.description
    ? props.description
    : defaultDescription;
  const url = props.pagePath
    ? `https://english.yunomy.com${props.pagePath}`
    : defaultUrl;
  const imgUrl = props.image
    ? `https://english.yunomy.com${props.image}`
    : defaultImg;

  return (
    <Head>
      {/* title */}
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link rel="canonical" href={url} />
      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://english.yunomy.com/" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:site_name" content={title} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yuno_miyako2" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      {/* Google Adsense */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8396972244544340"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
}
