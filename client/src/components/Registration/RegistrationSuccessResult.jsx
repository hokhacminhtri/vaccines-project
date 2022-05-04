import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationSuccessResult() {
  return (
    <Box py={3} maxWidth={576} sx={{ margin: '0 auto' }}>
      <Stack spacing={3} alignItems="center">
        <CheckCircleIcon color="success" sx={{ fontSize: '3rem' }} />
        <Typography
          variant="h5"
          component="p"
          color="grey.700"
          textAlign="center">
          Đăng ký tiêm vắc xin thành công, chúng tôi sẽ liên hệ bạn trong thời
          gian sớm nhất. Xin cảm ơn !
        </Typography>
        <Link to="/">
          <Button variant="contained" color="primary">
            Về trang chủ
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
