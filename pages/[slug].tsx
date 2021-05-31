// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";
// import Layout from "components/layout";
// import Image from "next/image";

// dayjs.extend(utc);
// dayjs.extend(timezone);

// const author = "@takeshushu";

// export default function BlogSlug({
//   blog,
// }: {
//   blog: {
//     title: string;
//     content: string;
//     updatedAt: string;
//   };
// }) {
//   return (
//     <Layout>
//       <div className="border-b-2 p-2">
//         <h1 className="text-l pb-3 md:text-xl">{blog.title}</h1>
//         <div className="p-1 flex items-end">
//           <span className="pb-3 items-start md:text-base">
//             <div className="flex items-initial">
//               <Image src="/icons/time.svg" width={20} height={20} />
//               <div>
//                 {dayjs
//                   .utc(blog.updatedAt)
//                   .tz("Asia/Tokyo")
//                   .format("YYYY/MM/DD")}
//               </div>
//             </div>
//           </span>
//           <span className="pb-3 pl-3.5 md:text-base">
//             <Image src="/icons/user.svg" width={20} height={20} />
//             <a href="https://twitter.com/takeshshuhu">{author}</a>
//           </span>
//         </div>
//       </div>
//       <div
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//         className="text-left pt-3"
//       />
//     </Layout>
//   );
// }

// export const getStaticPaths = async () => {
//   const key = {
//     headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
//   };

//   const data = await fetch("https://takeshu-blog.microcms.io/api/v1/blog", key)
//     .then((res) => res.json())
//     .catch(() => null);

//   const paths = data.contents.map((content) => `/${content.id}`);
//   return { paths, fallback: true };
// };

// export const getStaticProps = async (context) => {
//   const slug = context.params?.slug;
//   const draftKey = context.previewData?.draftKey;
//   const blog = await fetch(
//     `https://takeshu-blog.microcms.io/api/v1/blog/${slug}${
//       draftKey !== undefined ? `?draftKey=${draftKey}` : ""
//     }`,
//     { headers: { "X-API-KEY": process.env.API_KEY || "" } }
//   ).then((res) => res.json());
//   return {
//     props: {
//       blog,
//     },
//   };
// };

export default function Preview() {
  return <h1>Hi</h1>;
}
