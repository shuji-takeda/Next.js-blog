import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

const defaultImagePath = '/images/background.jpg';

export type cardBlogContentType = {
  imagePath?: string;
  title: string;
  description: string;
};

export default function CardBlogContent(props: cardBlogContentType) {
  const { imagePath, title, description } = props;
  return (
    <Card className="mx-auto max-w-xs sm:max-w-2xl">
      <CardActionArea>
        <CardMedia
          component="img"
          image={imagePath ? imagePath : defaultImagePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
