import InfoIcon from '@mui/icons-material/Info';
import {
  Autocomplete,
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
import React, { useRef } from 'react';
import { GENDER, RELATIONSHIP_OPTIONS } from '../../constants';
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

export default function NewMemberForm() {
  const addressRef = useRef(null);
  const onAddressSelect = (value) => {
    addressRef.current = value;
  };

  return (
    <Grid container spacing={2}>
      {/* Fullname */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="fullname">Họ tên người tiêm</Label>
          <TextField id="fullname" variant="outlined" size="small" autoFocus />
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
          <RadioGroup id="gender" row defaultValue={GENDER.MALE}>
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
          <TextField id="addrDetail" variant="outlined" size="small" />
        </Stack>
      </Grid>

      {/* Relative info */}
      <Grid item xs={12}>
        <Typography
          mt={3}
          component="h4"
          variant="inherit"
          textTransform="uppercase"
          color="grey.600">
          Thông tin liên hệ
        </Typography>
      </Grid>

      {/* Relative name */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="relativeName">Họ tên người liên hệ</Label>
          <TextField id="relativeName" variant="outlined" size="small" />
        </Stack>
      </Grid>

      {/* Relative Phone */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="relativePhone">Số điện thoại người liên hệ</Label>
          <TextField id="relativePhone" variant="outlined" size="small" />
        </Stack>
      </Grid>

      {/* Relationship */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="relationship">Mối quan hệ</Label>
          <Autocomplete
            disablePortal
            options={RELATIONSHIP_OPTIONS}
            size="small"
            fullWidth
            onChange={() => {}}
            renderInput={(params) => (
              <TextField {...params} placeholder="Chọn" />
            )}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
