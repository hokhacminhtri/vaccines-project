import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { AddressContext } from '../../contexts/addressContext';

// Dummy data
const dummyCenterList = [
  {
    value: 1,
    label: 'VNVC Cao Lãnh',
  },
  {
    value: 2,
    label: 'VNVC Đống Đa',
  },
];

export default function CenterAddressSelect() {
  const { provinces } = useContext(AddressContext);
  const [centerList, setCenterList] = useState([]);
  const provinceOptions = provinces.map((p) => ({ ...p, label: p.name }));

  const onProvinceChange = (e, province) => {
    if (province) {
      const provinceId = Number(province.provinceId);

      // Find center list by provinceId (call API)
      const centers = dummyCenterList.filter((i) => i.value === provinceId);
      setCenterList(centers);
    }
  };

  const onCenterChange = (e, center) => {
    const centerId = Number(center.centerId);
    console.log(centerId);
    // ...
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Autocomplete
          id="centerAddress"
          size="small"
          fullWidth
          disablePortal
          disableClearable
          options={provinceOptions}
          onChange={onProvinceChange}
          isOptionEqualToValue={(o, v) => o.provinceId === v.provinceId}
          renderInput={(params) => (
            <TextField {...params} placeholder="Chọn Tỉnh / Thành" />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Autocomplete
          id="centerName"
          size="small"
          fullWidth
          disablePortal
          disableClearable
          options={centerList}
          onChange={onCenterChange}
          renderInput={(params) => (
            <TextField {...params} placeholder="Chọn trung tâm VNVC" />
          )}
        />
      </Grid>
    </Grid>
  );
}
