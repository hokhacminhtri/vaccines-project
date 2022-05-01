import { Autocomplete, Grid, TextField } from '@mui/material';
import React from 'react';

export default function AddressSelect() {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Autocomplete
          disablePortal
          options={[]}
          size="small"
          fullWidth
          onChange={() => {}}
          renderInput={(params) => (
            <TextField {...params} placeholder="Tỉnh Thành" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4} sx={{ px: { md: 1 }, my: { md: 0, xs: 1 } }}>
        <Autocomplete
          disablePortal
          options={[]}
          size="small"
          fullWidth
          onChange={() => {}}
          renderInput={(params) => (
            <TextField {...params} placeholder="Quận Huyện" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Autocomplete
          disablePortal
          options={[]}
          size="small"
          fullWidth
          onChange={() => {}}
          renderInput={(params) => (
            <TextField {...params} placeholder="Xã Phường" />
          )}
        />
      </Grid>
    </Grid>
  );
}
