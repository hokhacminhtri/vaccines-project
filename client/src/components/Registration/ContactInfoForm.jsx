import { Autocomplete, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { RELATIONSHIP_OPTIONS } from '../../constants';

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

export default function ContactInfoForm({ onChange }) {
  const onRelationshipChange = (e, value) => {
    const relId = RELATIONSHIP_OPTIONS.findIndex((rel) => rel === value);
    onChange('relRelationship', relId);
  };

  return (
    <Grid container spacing={2}>
      {/* Relative info */}
      <Grid item xs={12}>
        <Typography
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
          <TextField
            id="relativeName"
            variant="outlined"
            size="small"
            onChange={(e) => onChange('relName', e.target.value)}
          />
        </Stack>
      </Grid>

      {/* Relative Phone */}
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Label id="relativePhone">Số điện thoại người liên hệ</Label>
          <TextField
            id="relativePhone"
            variant="outlined"
            size="small"
            onChange={(e) => onChange('relPhone', e.target.value)}
          />
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
            onChange={onRelationshipChange}
            renderInput={(params) => (
              <TextField {...params} placeholder="Chọn" />
            )}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
