import Layout from "components/layout";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import utilStyles from "../../styles/util.module.scss";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogId({
  blog,
}: {
  blog: {title: string; publishedAt: string; content: string};
}) {
  return (
    <Layout>
      <main>
        <h1 className={utilStyles.title}>{blog.title}</h1>
        <p className={utilStyles.publishedAt}>
          {dayjs.utc(blog.publishedAt).tz("Asia/Tokyo").format("YYYY/MM/DD")}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
          className={utilStyles.post}
        />
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: {"X-API-KEY": process.env.API_KEY},
  };

  const data = await fetch("https://takeshu-blog.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  // @ts-ignore
  const paths = data.contents.map((content) => `/microCMSblog/${content.id}`);
  return {paths, fallback: false};
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: {
      "X-API-KEY": process.env.API_KEY,
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

interface Blog {}
