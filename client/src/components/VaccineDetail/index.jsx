import TagIcon from '@mui/icons-material/LocalOffer';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { VACCINE_AVT_URL } from '../../constants/default';
import { currencyFormat } from '../../utils/format';

export default function VaccineDetail({
  name,
  country = 'Đang cập nhật',
  price = 0,
  concept = 'Đang cập nhật',
  avt,
  info = 'Đang cập nhật',
}) {
  const vaccineAvt = avt ? avt : VACCINE_AVT_URL;
  const formattedPrice = price ? currencyFormat(price) : 'Đang cập nhật';

  useEffect(() => {
    document.getElementById('info').innerHTML = info;
    return () => {};
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box bgcolor="primary.main" borderRadius="16px" px={4} py={3} mb={4}>
          <Typography
            variant="h5"
            component="h1"
            color="white"
            fontWeight={500}
            textTransform="uppercase">
            {name}
          </Typography>
          <Typography variant="body1" component="div" color="grey.300" mt={1}>
            Nguồn gốc: {country}
          </Typography>
          <Box display="flex" alignItems="center" color="white" my={3} gap={1}>
            <TagIcon color="inherit" fontSize="medium" />
            <Typography variant="h5" component="strong" fontWeight={600}>
              {formattedPrice}
            </Typography>
          </Box>
          <Typography component="div" mb={1} color="white">
            Phòng bệnh:
          </Typography>
          <Typography className="text-line-3" variant="body1" color="grey.200">
            {concept}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Typography
          variant="h5"
          component="h2"
          color="primary.main"
          fontWeight={500}
          mb={2}
          textTransform="uppercase">
          MÔ TẢ THÔNG TIN VẮC XIN : {name}
        </Typography>
        <Box>
          <img
            width="100%"
            style={{ maxHeight: 450 }}
            src={vaccineAvt}
            alt={name}
            title={name}
          />
        </Box>

        <Box my={2} id="info" color="grey.700"></Box>
      </Grid>
    </Grid>
  );
}
