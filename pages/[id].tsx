import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import utilStyles from '../styles/util.module.scss';
import HeaderTag from '@/components/headerTag';
import Head from '@/components/headTag';
import FooterTag from '@/components/footerTag';
import Image from 'next/image';
import { getAllBlog, getBlogById } from 'lib/api';
import { renderToc } from 'lib/render-toc';

import Tags, { TagsType } from '@/components/tags';
import { Article } from 'domain/type';

dayjs.extend(utc);
dayjs.extend(timezone);

export type AnkerList = {
  text: string;
  id: string;
};

const categoryList: TagsType[] = [
  { name: 'Java' },
  { name: 'Spring' },
  { name: 'SpringBoot' },
  { name: 'Mysql' },
  { name: 'Oracle' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Vue' },
  { name: 'Express' },
];

const tag: TagsType[] = [
  { name: 'Tags' },
  { name: 'Spring' },
  { name: 'SpringBoot' },
  { name: 'Mysql' },
  { name: 'Oracle' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Vue' },
  { name: 'Express' },
];

const defaultImagePath = '/images/milad-fakurian-HE1_K4_-QT8-unsplash.jpg';

export type Props = {
  article: Article;
  ankerList: AnkerList[];
};

export default function BlogId(props: Props) {
  const article = props.article;
  const ankerList = props.ankerList;
  useEffect(() => {
    getAnker();
  });

  return (
    <>
      <Head />
      <HeaderTag />
      <main className="container mx-auto mb-5">
        <div className="flex flex-col sm:flex-row">
          <div id="container" className=" w-full mx-auto sm:w-1/2 sm:mr-0">
            <div id="title" className="backgroundImage h-40 sm:h-64">
              <p className="text-2xl sm:text-4xl font-bold text-center py-20">
                {article.title}
              </p>
            </div>
            <div id="postedAt">
              <p className=" text-sm text-gray-500">
                {dayjs
                  .utc(article.publishedAt)
                  .tz('Asia/Tokyo')
                  .format('YYYY/MM/DD')}
              </p>
            </div>
            <div className="mx-auto" id="mokuji">
              <TableOfContents toc={ankerList} />
            </div>
            <div
              id="mainContent"
              dangerouslySetInnerHTML={{
                __html: `${article.content}`,
              }}
              className={`${utilStyles.blog} mx-3 bg-gray-100`}
            />
          </div>
          <div className="w-screen flex flex-col sm:w-3/12">
            <Tags title="Category" tags={categoryList} />
            <Tags title="Tags" tags={tag} />
          </div>
        </div>
      </main>
      <FooterTag />
    </>
  );
}

export const getStaticPaths = async () => {
  const allblog = await getAllBlog();
  const paths = allblog.contents.map((content) => `/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const article = await getBlogById(id);
  const ankerList = renderToc(article.content);
  if (ankerList) {
    console.log(ankerList);
  }

  return {
    props: {
      article,
      ankerList,
    },
  };
};

export const TableOfContents = ({ toc }: { toc: AnkerList[] }) => {
  if (toc) {
    console.log(toc);
  }
  return (
    <>
      {toc ? (
        <div className=" bg-gray-100 m-5">
          <p className="TableOfContentsHead text-center">目次</p>
          <ul>
            {toc.map((data) => (
              <li key={data.id} className="mb-2 ml-5">
                <a href={`#${data.id}`} className=" hover:bg-gray-200">
                  <span className="underline text-black">{data.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <br />
      )}
    </>
  );
};

export const getAnker = () => {
  const ankerList = document.querySelectorAll('h1');
  ankerList.forEach((element) => {
    const newElement = document.createElement('a');
    const newContent = document.createTextNode(element.innerText);
    newElement.appendChild(newContent);
    newElement.setAttribute('href', '#' + element.id);

    const parentDiv = document.getElementById('anker');

    const indent = document.createElement('br');
    if (parentDiv !== null) {
      parentDiv.appendChild(newElement);
      parentDiv.appendChild(indent);
    }
  });
};
