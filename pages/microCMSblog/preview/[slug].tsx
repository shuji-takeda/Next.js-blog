import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Layout from "components/layout";
import utilStyles from "../../../styles/util.module.scss";
import { getAllBlog, getPreviewBlog } from "lib/api";
import React from "react";
import Custom404 from "pages/404";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogSlug({
  blog,
}: {
  blog: {
    title: string;
    content: string;
    publishedAt: string;
    category: string[];
  };
}) {
  if (!blog) {
    return <Custom404 />;
  }
  return (
    <>
      <Layout preview>
        <div className="border-b-2 p-2">
          <h1 className="text-center text-3xl font-bold font-serif">
            {blog.title}
          </h1>
          {/* <ul>
          {blog.category.map((category) => (
            <li>{category}</li>
          ))}
        </ul> */}
          <p className="text-center text-xl font-bold font-serif pt-3">
            {dayjs.utc(blog.publishedAt).tz("Asia/Tokyo").format("YYYY/MM/DD")}
          </p>
        </div>
        <main className="blog">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className={utilStyles.blog}
          />
        </main>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getAllBlog();
  const paths =
    data.contents.map((content) => `/microCMSblog/preview/${content.id}`) || [];
  return { paths, fallback: true };
};

export const getStaticProps = async (context: {
  previewData?: { draftKey: string; slug: string };
  params: { slug: string };
}) => {
  const draftKey = "";
  let blog;
  if (context.previewData === undefined) {
    return { props: { blog: null } };
  } else {
    blog = await getPreviewBlog(
      context.params.slug,
      context.previewData.draftKey || draftKey
    );
    return {
      props: {
        blog: blog,
      },
    };
  }
};
