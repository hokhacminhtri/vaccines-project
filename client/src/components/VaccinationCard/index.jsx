import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

export default function VaccinationCard({
  avt,
  title,
  desc='Đang cập nhật',
  link,
}) {
  return (
    <Card sx={{ maxWidth: 375, maxHeight: 425}}>
      <CardActions sx={{ pb: 2, mt: 'auto' }}>
        <Link to={link} className="w-100">
          <CardMedia
            component="img"
            height="250"
            image={avt}
            alt="green iguana"/>
          <CardContent>
            <Typography gutterBottom variant="h6" fontSize="18px" component="div" color="#4d63a6">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {desc}
            </Typography>
        </CardContent>
        </Link>
      </CardActions>
  </Card>
  );
}
