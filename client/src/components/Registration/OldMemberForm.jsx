import CheckIcon from '@mui/icons-material/CheckCircle';
import { Alert, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import customerApi from '../../apis/customerApi';
import { MAX } from '../../constants/validation';

export default function OldMemberForm({ onSaveCode }) {
  const memberCode = useRef('');
  const [error, setError] = useState(null);
  const [checkSuccess, setCheckSuccess] = useState(false);
  const [memberInfo, setMemberInfo] = useState(null);

  const onCheckMemberCode = async () => {
    if (!memberCode.current) {
      return setError('Vui lòng nhập "Mã thành viên" !');
    }

    try {
      const apiRes = await customerApi.getInfoByMemberCode(memberCode.current);
      if (apiRes.status === 200) {
        const { fullName, phone } = apiRes.data;
        onCheckSuccess({ fullName, phone });
      }
    } catch (error) {
      setError('Mã thành viên không hợp lệ !');
      setMemberInfo(null);
      setCheckSuccess(false);
      onSaveCode(null);
    }
  };

  const onCheckSuccess = (info) => {
    onSaveCode(memberCode.current);
    setError(null);
    setCheckSuccess(true);
    setMemberInfo(info);
  };

  return (
    <>
      <Typography
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
          inputProps={{ maxLength: MAX.MEMBER_CODE }}
          size="small"
          onChange={(e) => (memberCode.current = e.target.value.trim())}
        />
        <Button
          variant="outlined"
          color={checkSuccess ? 'success' : 'primary'}
          endIcon={checkSuccess ? <CheckIcon /> : <></>}
          sx={{ width: '180px' }}
          onClick={onCheckMemberCode}>
          Kiểm tra
        </Button>
      </Stack>

      {/* Customer info */}
      {memberInfo && (
        <Stack spacing={2} direction="row" my={2} sx={{ width: '100%' }}>
          <TextField
            value={memberInfo.fullName}
            disabled
            label="Họ tên"
            size="small"
            variant="filled"
            sx={{ width: '50%' }}
          />
          <TextField
            value={memberInfo.phone}
            disabled
            label="Số điện thoại"
            size="small"
            variant="filled"
            sx={{ width: '50%' }}
          />
        </Stack>
      )}

      {/* Error */}
      {Boolean(error) && <Alert severity="error">{error}</Alert>}
    </>
  );
}
