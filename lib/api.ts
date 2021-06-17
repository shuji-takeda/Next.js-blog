import { client } from "../lib/client";

import { Article, Contents } from "domain/type";

// get all posted blog
export async function getAllBlog(): Promise<Contents> {
  const data: Contents = await client.get({ endpoint: "blog" });
  return data;
}

// get single posted blog by blogId
export async function getPostBlog(blogId: string): Promise<Article> {
  const data: Article = await client.get({ endpoint: `blog/${blogId}` });
  return data;
}

// get single draft blog by blogid and draftKey
export async function getPreviewBlog(
  slug: string | string[],
  draftKey: string | string[]
): Promise<Article> {
  const data: Article = await client.get({
    endpoint: `blog/${slug}${draftKey !== "" ? `?draftKey=${draftKey}` : ""}`,
  });
  return data;
}
