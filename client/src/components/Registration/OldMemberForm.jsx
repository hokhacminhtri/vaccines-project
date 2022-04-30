import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';

export default function OldMemberForm() {
  const memberCode = useRef('');
  const [error, setError] = useState(null);

  const onCheckMemberCode = () => {
    if (!memberCode.current) {
      return setError('Vui lòng nhập "Mã thành viên"');
    }
    console.log(memberCode.current);
  };

  return (
    <Box py={1}>
      <Typography
        variant="h5"
        component="h2"
        color="primary.dark"
        fontWeight="medium">
        ĐĂNG KÝ VỚI THÀNH VIÊN KHÁCH HÀNG THÂN THIẾT
      </Typography>

      <Typography
        mt={2}
        variant="inherit"
        component="p"
        color="text.secondary"
        fontWeight="medium">
        Nhập mã thẻ thành viên của quý khách
      </Typography>

      <Stack spacing={2} direction="row" my={1} sx={{ width: '100%' }}>
        <TextField
          sx={{ flexGrow: 1 }}
          id="memberCode"
          placeholder="Nhập mã thẻ thành viên của quý khách (*)"
          error={Boolean(error)}
          size="small"
          onChange={(e) => (memberCode.current = e.target.value.trim())}
        />
        <Button
          variant="outlined"
          color="primary"
          sx={{ width: '180px' }}
          onClick={onCheckMemberCode}>
          Kiểm tra
        </Button>
      </Stack>

      {Boolean(error) && <Alert severity="error">{error}</Alert>}
    </Box>
  );
}
