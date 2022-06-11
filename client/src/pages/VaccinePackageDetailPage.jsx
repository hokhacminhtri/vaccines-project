import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import vaccinePackageApi from '../apis/vaccinePackageApi';
import VaccineCard from '../components/VaccineCard';
import VaccineDetail from '../components/VaccineDetail';
import usePageTitle from '../hooks/usePageTitle';

export default function VaccinePackageDetailPage() {
  usePageTitle('Chi tiết gói vaccine');
  const { packageId = '' } = useParams();
  const [vaccinePackage, setVaccinePackage] = useState(null);

  useEffect(() => {
    let isSubscribe = true;

    (async function () {
      const apiRes = await vaccinePackageApi.getVaccinePackageInfo(packageId);
      if (apiRes.status === 200 && isSubscribe) {
        setVaccinePackage(apiRes.data);
      }
    })();

    return () => {
      isSubscribe = false;
    };
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      {vaccinePackage ? (
        <>
          <VaccineDetail
            {...vaccinePackage}
            concept={vaccinePackage.prevention}
            info={vaccinePackage.desc}
          />

          <Grid container>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                component="h2"
                color="primary.main"
                mb={2}
                fontWeight={500}>
                Danh sách vaccine trong gói
              </Typography>
              {vaccinePackage.vaccines?.length > 0 ? (
                <Grid container spacing={2}>
                  {vaccinePackage.vaccines?.map((vaccine, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                      <VaccineCard {...vaccine.vaccineId} isPackage={false} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography
                  variant="h6"
                  fontWeight={400}
                  color="grey.700"
                  textAlign="center">
                  danh sách vaccine trong gói đang được cập nhật ...
                </Typography>
              )}
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography
          variant="h6"
          fontWeight={400}
          color="grey.700"
          textAlign="center">
          Thông tin gói vaccine đang được cập nhật ...
        </Typography>
      )}
    </Container>
  );
}
