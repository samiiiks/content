import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MyCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Image"
        height="140"
        image="https://example.com/image.jpg"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Subtitle
        </Typography>
        <Typography variant="body2" component="div">
          Some description about the card.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
