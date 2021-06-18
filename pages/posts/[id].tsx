import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
// import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/util.module.scss";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// export default function BlogId({blog}){
//   return (
//       <main>
//       <h1>{blog.title}</h1>
//       <p>{blog.publishedAt}</p>
//       <div
//         dangerouslySetInnerHTML={{
//           __html: `${blog.body}`,
//         }}
//       />
//     </main>
//   )
// }

// export const getStaticPaths = async ()=>{
//   const key = {
//       headers:{"X-API-KEY": process.env.API_KEY},
//   }

//   const data = await fetch('https://takeshu-blog.microcms.io/api/v1/blog' , key)
//   .then(res => res.json())
//   .catch(()=> null);

//   const paths = data.contents.map(content => `/blog/${content.id}`);
//   return {paths , fallback:false}
// }

// export const getStaticProps = async context => {
//   const id = context.params.id
//   const key = {
//       headers: {"X-API-KEY": process.env.API_KEY}
//   }

//   const data = await fetch(
//       'https://takeshu-blog.microcms.io/api/v1/blog/' + id,
//       key,
//     )
//       .then(res => res.json())
//       .catch(() => null);
//     return {
//       props: {
//         blog: data,
//       },
//   }
// }
