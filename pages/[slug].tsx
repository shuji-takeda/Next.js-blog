import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Layout from "components/layout";
import Image from "next/image";
import utilStyles from "../styles/util.module.scss";

dayjs.extend(utc);
dayjs.extend(timezone);

const author = "@takeshushu";

interface Contents {
  contents: Article[];
}

interface Article {
  id: string;
  title: string;
  body: string;
}

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
  return (
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
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY || "" },
  };
  const test = process.env.API_KEY;
  console.log("slug-getStaticPaths:  " + test);

  const data: Contents = await fetch(
    "https://takeshu-blog.microcms.io/api/v1/blog",
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  const paths = data.contents.map((content) => `/${content.id}`);
  return { paths, fallback: true };
};

export const getStaticProps = async (context: {
  params: { id: string; slug: string };
  previewData: { draftKey: string };
}) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const blog = await fetch(
    `https://takeshu-blog.microcms.io/api/v1/blog/${slug}${
      draftKey !== undefined ? `?draftKey=${draftKey}` : ""
    }`,
    { headers: { "X-API-KEY": process.env.API_KEY || "" } }
  ).then((res) => res.json());
  return {
    props: {
      blog,
    },
  };
};
