import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import addressApi from '../../apis/addressApi';
import { AddressContext } from '../../contexts/addressContext';

export default function CenterAddressSelect({ onSelect }) {
  const { provinces } = useContext(AddressContext);
  const [centerList, setCenterList] = useState([]);
  const provinceOptions = provinces.map((p) => ({ ...p, label: p.name }));

  const onProvinceChange = async (e, province) => {
    if (province) {
      const provinceId = Number(province.provinceId);
      const apiRes = await addressApi.getCenterListByProvinceId(provinceId);
      if (apiRes.status === 200) {
        const centerOptions = apiRes.data.map((i) => ({ ...i, label: i.name }));
        setCenterList(centerOptions);
        onSelect(null);
      }
    }
  };

  const onCenterChange = (e, center) => {
    const centerId = Number(center.centerId);
    onSelect(centerId);
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
