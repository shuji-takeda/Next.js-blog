import { client } from '../lib/client';

import { AllBlogResponse } from 'api/response';
import { Article } from 'domain/type';

// get all posted blog
export async function getAllBlog(): Promise<AllBlogResponse> {
  console.log('getAllBlog');
  const response: AllBlogResponse = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 5,
    },
  });
  return response;
}

export async function getBlogs(id: string): Promise<AllBlogResponse> {
  console.log('getBlogs');
  const response: AllBlogResponse = await client.get({
    endpoint: 'blog',
    queries: { offset: (Number(id) - 1) * 4, limit: 4 },
  });
  return response;
}

// get single posted blog by blogId
export async function getBlogById(blogId: string): Promise<Article> {
  console.log('getBlogById');
  const data: Article = await client.get({ endpoint: `blog/${blogId}` });
  return data;
}

// get single draft blog by blogid and draftKey
export async function getPreviewBlog(
  slug: string | string[],
  draftKey: string | string[]
): Promise<Article> {
  const data: Article = await client.get({
    endpoint: `blog/${slug}${draftKey !== '' ? `?draftKey=${draftKey}` : ''}`,
  });
  return data;
}
