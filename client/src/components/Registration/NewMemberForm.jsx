import InfoIcon from '@mui/icons-material/Info';
import {
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { GENDER } from '../../constants';
import AddressSelect from '../AddressSelect';

const PHONE_TOOLTIP =
  'Nếu người được tiêm chưa có SĐT, vui lòng điền SĐT của cha/mẹ hoặc người giám hộ sẽ nhận mã tiêm chủng';

function Label({ id, children, isRequired = true }) {
  return (
    <Typography
      component="label"
      htmlFor={id}
      fontWeight={500}
      color="grey.800">
      {children}
      {isRequired && (
        <Typography color="error.main" component="span">
          &nbsp;*
        </Typography>
      )}
    </Typography>
  );
}

export default function NewMemberForm({
  onInfoChange,
  onAddressSelect,
  onAddressChange,
}) {
  return (
    <Grid container spacing={2}>
      {/* Fullname */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="fullName">Họ tên người tiêm</Label>
          <TextField
            id="fullName"
            variant="outlined"
            size="small"
            autoFocus
            onChange={(e) => onInfoChange('fullName', e.target.value)}
          />
        </Stack>
      </Grid>

      {/* Birthday */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="birthday">Ngày sinh</Label>
          <TextField
            id="birthday"
            variant="outlined"
            size="small"
            type="date"
            onChange={(e) => onInfoChange('birthday', e.target.value)}
          />
        </Stack>
      </Grid>

      {/* Phone */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="phone">Số điện thoại</Label>
          <TextField
            id="phone"
            variant="outlined"
            size="small"
            onChange={(e) => onInfoChange('phone', e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="cursor-pointer">
                  <Tooltip title={PHONE_TOOLTIP}>
                    <InfoIcon color="info" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Grid>

      {/* Gender */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="gender">Giới tính</Label>
          <RadioGroup
            id="gender"
            row
            defaultValue={GENDER.MALE}
            onChange={(e, value) => onInfoChange('gender', Number(value))}>
            <FormControlLabel
              value={GENDER.MALE}
              control={<Radio />}
              label="Nam"
            />
            <FormControlLabel
              value={GENDER.FEMALE}
              control={<Radio />}
              label="Nữ"
            />
          </RadioGroup>
        </Stack>
      </Grid>

      {/* Address */}
      <Grid item xs={12}>
        <Stack spacing={1}>
          <Label id="province">Địa chỉ</Label>
          <AddressSelect onFullSelect={onAddressSelect} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <Label id="addrDetail">Số nhà, tên đường</Label>
          <TextField
            id="addrDetail"
            variant="outlined"
            size="small"
            onChange={(e) => onAddressChange(e.target.value)}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
