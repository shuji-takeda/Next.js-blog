import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';

import { Article } from 'domain/type';
import dayjs from 'dayjs';

export default function CardBlogContent(props: { article: Article }) {
  const { title, publishedAt, category, tags } = props.article;
  let isCategory = true;
  if (category.length === 0) isCategory = false;
  console.log(category);
  //console.log(tags);
  return (
    <Card className="mx-auto sm:ml-auto max-w-xs backgroundImage h-40 sm:max-w-2xl sm:h-64">
      <CardActionArea className=" min-h-full">
        <CardContent>
          <Typography className="text-lg sm:text-2xl">{title}</Typography>
          <Typography variant="body2" color="text.secondary" className="mb-2">
            {dayjs.utc(publishedAt).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm')}
          </Typography>
          {isCategory ? (
            <>
              <Typography
                sx={{ mb: 1 }}
                className="px-1 text-sm text-blue-400 text-opacity-70 sm:text-lg sm:mb-2"
              >
                {category}
              </Typography>
              <ul className="flex">
                {tags.map((tag, index) => (
                  <li key={index} className="flex-row mr-1">
                    <LocalOfferRoundedIcon fontSize="small" />
                    <span className="text-xs text-blue-400 text-opacity-70 sm:text-base">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
