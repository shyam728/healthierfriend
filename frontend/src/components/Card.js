import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
         
          <p className="info-card-title">{props.heading}</p>
          {/* <Typography variant="body2" color="text.secondary">
           {props.pargraph}
          </Typography> */}
          <p className="info-card-description">{props.description}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}