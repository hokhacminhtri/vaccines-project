import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { VACCINE_AVT_URL } from '../../constants/default';
import { currencyFormat } from '../../utils/format';

export default function VaccineCard({
  avt,
  name,
  country = 'Đang cập nhật',
  price,
  concept = 'Đang cập nhật',
  _id = '',
  isPackage = false,
}) {
  const logoUrl = avt ? avt : VACCINE_AVT_URL;
  const formattedPrice = price ? currencyFormat(price) : 'Đang cập nhật';
  const to = isPackage ? `/vaccine-package/${_id}` : `/vaccine/${_id}`;

  return (
    <Card className="wh-100 flex-column" variant="outlined">
      <CardMedia
        component="img"
        height="140"
        image={logoUrl}
        alt={name}
        sx={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          color="primary.dark"
          textTransform="uppercase">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Nguồn gốc: {country}
        </Typography>
        <Typography
          my={2}
          variant="h5"
          component="div"
          className="vertical-center"
          color="secondary.main"
          fontWeight={500}>
          <LocalOfferIcon sx={{ mr: 1 }} />
          <span>{formattedPrice}</span>
        </Typography>
        <Typography variant="body1" pb={1} color="text.primary">
          Phòng bệnh:
        </Typography>
        <Typography
          className="text-line-3"
          variant="body2"
          color="text.secondary">
          {concept}
        </Typography>
      </CardContent>

      <CardActions sx={{ pb: 2, mt: 'auto' }}>
        <Link to={to} className="w-100">
          <Button size="large" variant="contained" fullWidth>
            Xem chi tiết
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
