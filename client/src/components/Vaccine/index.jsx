import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Vaccine({ name = '', price = 0 }) {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Thêm giỏ hàng</Button>
      </CardActions>
    </>
  );
}
