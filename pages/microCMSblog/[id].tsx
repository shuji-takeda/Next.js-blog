import Layout from "components/layout";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import utilStyles from "../../styles/util.module.scss";
import {GetStaticProps} from "next";

dayjs.extend(utc);
dayjs.extend(timezone);

interface Contents {
  contents: Article[];
}

interface Article {
  id: string;
  title: string;
  body: string;
}

interface Props {
  articles: Article[];
}

export default function BlogId({
  blog,
}: {
  blog: { title: string; publishedAt: string; content: string };
}) {
  return (
    <Layout>
      <main className="blog">
        <h1 className={utilStyles.title}>{blog.title}</h1>
        <p className={utilStyles.publishedAt}>
          {dayjs.utc(blog.publishedAt).tz("Asia/Tokyo").format("YYYY/MM/DD")}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
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

  const data: Contents = await fetch("https://takeshu-blog.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/microCMSblog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context:{params:{id:string;}}) => {
  const id = context.params.id;
  const key = {
    headers: {
      "X-API-KEY": process.env.API_KEY || "",
    },
  };

  const data = await fetch(
    "https://takeshu-blog.microcms.io/api/v1/blog/" + id,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};

// interface Blog {}
