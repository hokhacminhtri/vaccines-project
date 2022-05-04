import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

export default function RegisteredRadio({ onChange, defaultValue = 0 }) {
  return (
    <RadioGroup
      onChange={(e) => onChange(Number(e.target.value))}
      aria-labelledby="registered"
      defaultValue={defaultValue}
      name="registered">
      <FormControlLabel
        value={1}
        control={<Radio />}
        label="Quý khách là Thành viên khách hàng thân thiết"
      />
      <FormControlLabel
        value={0}
        control={<Radio />}
        label="Quý khách chưa là Thành viên khách hàng thân thiết"
      />
    </RadioGroup>
  );
}
