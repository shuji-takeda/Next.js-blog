// @ts-nocheck
import * as cheerio from 'cheerio';

export const renderToc = (body) => {
  let toc = [];
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3').toArray();
  if (headings.length === 0) {
    return null;
  }
  toc = headings.map((data) => ({
    text: data.children[0].data ? data.children[0].data : '',
    id: data.children[0].data ? data.attribs.id : '',
  }));

  return toc;
};
