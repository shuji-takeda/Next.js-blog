import { getPreviewBlog } from "lib/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await getPreviewBlog(req.query.slug, req.query.draftKey);
  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/microCMSblog/preview/${content.id}` });
  res.end("Preview mode enabled");
};
