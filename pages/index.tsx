import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const author = "takeshushu";

export default function Home({
  blog,
}: {
  blog: {
    publishedAt: string;
    category: string[];
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
              <li key={blog.id} className="p-5 cursor-pointer">
                <Link href={`/microCMSblog/${blog.id}`}>
                  <div className="border-black border-2 border-opacity-25 shadow-2xl p-5 hover:bg-gray-400 hover:bg-opacity-30">
                    <a>
                      <h1 className="text-center text-3xl font-bold font-serif p-2">
                        {blog.title}
                      </h1>
                      <div className="flex flex-row justify-around border-2 border-black border-dotted">
                        <div className="flex flex-row">
                          <p className="pr-3">
                            {dayjs
                              .utc(blog.publishedAt)
                              .tz("Asia/Tokyo")
                              .format("YYYY/MM/DD")}
                          </p>
                          <p>{author}</p>
                        </div>
                        <div className="pl-10">
                          <ul>
                            {blog.category.map((category) => (
                              <li
                                key={blog.id}
                                className="shadow-xl border-black border-opacity-5 border-1 p-2"
                              >
                                {category}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
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
    headers: { "X-API-KEY": process.env.API_KEY || "" },
  };
  const data = await fetch("https://takeshu-blog.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
