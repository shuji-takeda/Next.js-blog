export async function getAllBlogData() {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const data = await fetch("https://takeshu-blog.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  const blog = data.contents.map((blog) => {
    const id = blog.id;
    const title = blog.title;
    const publishedAt = blog.publishedAt;
    return {
      id,
      title,
      publishedAt,
    };
  });
  return {
    blog,
  };
}
