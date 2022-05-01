import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import useGetProvinces from '../../hooks/useGetProvinces';

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

function renderOptions(options = []) {
  return options.map((option, index) => (
    <MenuItem key={index} value={option.value}>
      {option.label}
    </MenuItem>
  ));
}

export default function CenterAddressSelect() {
  const provinces = useGetProvinces();
  const [centerList, setCenterList] = useState([]);

  const onProvinceChange = (e) => {
    const provinceId = Number(e.target.value);

    // Find center list by provinceId (call API)
    const centers = dummyCenterList.filter((i) => i.value === provinceId);
    setCenterList(centers);
  };

  const onCenterChange = (e) => {
    const centerId = Number(e.target.value);
    // ...
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Select
          id="centerAddress"
          size="small"
          fullWidth
          defaultValue={-1}
          onChange={onProvinceChange}>
          <MenuItem disabled value={-1}>
            <span className="disabled">Chọn Tỉnh / Thành</span>
          </MenuItem>
          {renderOptions(
            provinces.map((p) => ({
              label: p.name,
              value: p.provinceId,
            })),
          )}
        </Select>
      </Grid>

      <Grid item xs={12} md={6}>
        <Select
          id="centerName"
          size="small"
          fullWidth
          defaultValue={-1}
          onChange={onCenterChange}>
          <MenuItem disabled value={-1}>
            <span className="disabled">Chọn trung tâm VNVC</span>
          </MenuItem>
          {renderOptions(centerList)}
        </Select>
      </Grid>
    </Grid>
  );
}
