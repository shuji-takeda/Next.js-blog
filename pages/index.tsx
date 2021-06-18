import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getAllBlog } from "lib/api";

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

// CMSより全データを取得する
export const getStaticProps = async () => {
  const allblog = await getAllBlog();
  return {
    props: {
      blog: allblog.contents,
    },
  };
};
