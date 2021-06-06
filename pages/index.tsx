import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { getAllBlogData } from "lib/blog";

export default function Home({
  blog,
}: {
  blog: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <ul>
            {blog.map((blog) => (
              <li key={blog.id} className="p-2">
                <Link href={`/microCMSblog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   // const allPostsData = getSortedPostsData();
//   const allBlogData = getAllBlogData();
//   return {
//     props: {
//       allBlogData,
//     },
//   };
// };
// CMSより全データを取得する
export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  //@ts-ignore
  const data = await fetch("https://takeshu-blog.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
