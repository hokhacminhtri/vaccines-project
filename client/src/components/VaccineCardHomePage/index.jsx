import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

export default function VaccinationCard({
  avt,
  name,
  _id,
}) {
  const link =`/vaccine/${_id}`;
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 250,backgroundColor: "transparent"}}>
      <CardActions sx={{ pb: 2, mt: 'auto' }}>
        <Link to={link} className="w-100">
          <CardMedia
            component="img"
            height="140"
            image={avt}
            alt="green iguana"/>
          <CardContent>
            <Typography gutterBottom variant="h6" fontSize="16px" component="div" color="#4d63a6" textAlign={"center"}>
            {name}
            </Typography>
        </CardContent>
        </Link>
      </CardActions>
  </Card>
  );
}
