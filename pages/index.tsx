import React from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { getAllBlog } from 'lib/api';

import { Article } from 'domain/type';
import { TagsType } from '@/components/tags';

import Head from '@/components/headTag';
import HeaderTag from '@/components/headerTag';
import CardBlogContent from '@/components/cardBlogContent';
import Paging from '@/components/paging';
import Tags from '@/components/tags';
import FooterTag from '@/components/footerTag';

dayjs.extend(utc);
dayjs.extend(timezone);

const category: TagsType[] = [
  { name: 'Java' },
  { name: 'Spring' },
  { name: 'SpringBoot' },
  { name: 'Mysql' },
  { name: 'Oracle' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Vue' },
  { name: 'Express' },
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
  { name: 'SpringBoot' },
  { name: 'Mysql' },
  { name: 'Oracle' },
  { name: 'React' },
  { name: 'Next' },
  { name: 'Vue' },
  { name: 'Express' },
];

export type Props = {
  blogs: Article[];
  totalCount: number;
};

export default function Home(props: Props) {
  const blogList = props.blogs;

  return (
    <>
      <Head />
      <HeaderTag />
      <main className="container mx-auto mt-5">
        <div className="flex flex-col sm:flex-row">
          <div id="container" className=" w-full mx-auto sm:w-1/2 sm:mr-0">
            <h1 className="px-3 pb-3 text-lg">記事一覧</h1>
            <div id="latestContentsArea" className="">
              <ul className="list-none">
                {blogList.map((blog) => (
                  <li className="mt-6" key={blog.id}>
                    <a href={`/${blog.id}`}>
                      <CardBlogContent article={blog} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <Paging totalCount={props.totalCount} />
            </div>
          </div>
          <div className="w-screen flex flex-col sm:w-3/12">
            <Tags title="Category" tags={category} />
            <Tags title="Tags" tags={tag} />
          </div>
        </div>
      </main>
      <FooterTag />
    </>
  );
}

// CMSより全データを取得する
export const getStaticProps = async () => {
  console.log('index.tsx : getStaticProps');
  const response = await getAllBlog();
  const blogs = response.contents;
  const pagingSize = response.totalCount;
  return {
    props: {
      blogs,
      totalCount: pagingSize,
    },
  };
};
