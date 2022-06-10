import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import vaccineApi from '../apis/vaccineApi';
import VaccineDetail from '../components/VaccineDetail';
import usePageTitle from '../hooks/usePageTitle';

export default function VaccineDetailPage() {
  usePageTitle('Chi tiết vaccine');
  const { vaccineId = '' } = useParams();
  const [vaccine, setVaccine] = useState(null);

  useEffect(() => {
    let isSubscribe = true;

    (async function () {
      const apiRes = await vaccineApi.getVaccineInfo(vaccineId);
      if (apiRes.status === 200 && isSubscribe) {
        setVaccine(apiRes.data);
      }
    })();

    return () => {
      isSubscribe = false;
    };
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      {vaccine ? (
        <VaccineDetail {...vaccine} />
      ) : (
        <Typography
          variant="h6"
          fontWeight={400}
          color="grey.700"
          textAlign="center">
          Thông tin vaccine đang được cập nhật ...
        </Typography>
      )}
    </Container>
  );
}
