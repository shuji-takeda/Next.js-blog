import React from 'react';
import { GetStaticPropsContext } from 'next';

import { Article } from 'domain/type';
import { getAllBlog, getBlogs } from 'lib/api';

import { TagsType } from '@/components/tags';

import Head from '@/components/headTag';
import HeaderTag from '@/components/headerTag';
import CardBlogContent from '@/components/cardBlogContent';
import Paging from '@/components/paging';
import Tags from '@/components/tags';
import FooterTag from '@/components/footerTag';
import { Constants } from 'lib/constants';

export type Props = {
  blogs: Article[];
  totalCount: number;
};

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

export default function BlogPageId(props: Props) {
  const blogList = props.blogs;
  const description = 'description';
  return (
    <>
      <Head />
      <HeaderTag />
      <main className="container mx-auto mt-5">
        <div className="flex flex-col sm:flex-row">
          <div id="container" className=" w-full mx-auto sm:w-1/2 sm:mr-0">
            <h1 className="px-3 pb-3 text-lg sm:text-4xl">記事一覧</h1>
            <div id="latestContentsArea" className="">
              <ul className="list-none">
                {blogList.map((blog) => (
                  <li className="mt-2" key={blog.id}>
                    <CardBlogContent
                      title={blog.title}
                      description={description}
                    />
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

export const getStaticPaths = async () => {
  console.log('[id].tsx : getStaticPaths');
  const blogs = await getAllBlog();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(blogs.totalCount / Constants.PER_PAGE)).map(
    (repo) => `/page/${repo}`
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  console.log('[id].tsx : getStaticProps');
  const id = context.params?.id;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const response = await getBlogs(id!);

  return {
    props: {
      blogs: response.contents,
      totalCount: response.totalCount,
    },
  };
};
