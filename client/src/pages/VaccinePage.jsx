import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from 'react';
import vaccineApi from '../apis/vaccineApi';
import vaccinePackageApi from '../apis/vaccinePackageApi';
import VaccineCard from '../components/VaccineCard';
import usePageTitle from '../hooks/usePageTitle';

const VACCINE_MODE_VALUES = { PACKAGES: 1, SINGLE: 2 };
const viewModes = [
  { value: VACCINE_MODE_VALUES.SINGLE, label: 'Vaccine lẻ' },
  { value: VACCINE_MODE_VALUES.PACKAGES, label: 'Vaccine gói' },
];

export default function VaccinePage() {
  usePageTitle('Danh sách vaccine');
  const [viewMode, setViewMode] = useState(VACCINE_MODE_VALUES.SINGLE);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [vaccines, setVaccines] = useState([]);

  const onViewModeChange = (e) => {
    setPage(1);
    setTotalPage(0);
    setViewMode(e.target.value);
  };

  useEffect(() => {
    let isSubscribe = true;

    (async function () {
      let apiRes = null;

      if (viewMode === VACCINE_MODE_VALUES.SINGLE) {
        apiRes = await vaccineApi.getVaccineList({
          select: 'name price country concept avt _id',
          sort: 'price',
          page,
        });
      } else if (viewMode === VACCINE_MODE_VALUES.PACKAGES) {
        apiRes = await vaccinePackageApi.getVaccinePackageList({
          select: 'name price prevention avt _id',
          sort: 'price',
          page,
        });
      }

      if (apiRes.status === 200 && isSubscribe) {
        let { total, pageSize, docs } = apiRes.data;
        if (viewMode === VACCINE_MODE_VALUES.PACKAGES) {
          docs = apiRes.data.docs.map((p) => ({
            ...p,
            concept: p.prevention,
            isPackage: true,
          }));
        }
        setTotalPage(Math.ceil(total / pageSize));
        setVaccines(docs);
      }
    })();

    return () => {
      isSubscribe = false;
    };
  }, [page, viewMode]);

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <FormControl sx={{ my: 3, maxWidth: 375, width: '100%' }} size="small">
        <InputLabel id="viewMode">Hiển thị theo</InputLabel>
        <Select
          labelId="viewMode"
          id="viewMode"
          label="Hiển thị theo"
          value={viewMode}
          onChange={onViewModeChange}>
          {viewModes.map((vm, index) => (
            <MenuItem value={vm.value} key={index}>
              {vm.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {vaccines.length ? (
        <Grid container spacing={3}>
          {vaccines.map((vaccine, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <VaccineCard {...vaccine} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          color="text.secondary"
          textAlign="center"
          component="p"
          variant="h5">
          Không tìm thấy sản phẩm nào
        </Typography>
      )}

      {totalPage > 0 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            onChange={(e, newPage) => setPage(newPage)}
            count={totalPage}
            variant="outlined"
            color="primary"
            shape="rounded"
          />
        </Box>
      )}
    </Container>
  );
}
