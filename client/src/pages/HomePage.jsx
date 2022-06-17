import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import vaccineApi from '../apis/vaccineApi';
import HomeIntroduction from '../components/HomeIntroduction';
import VaccineCardHomePage from '../components/VaccineCardHomePage';
import usePageTitle from '../hooks/usePageTitle';

export default function HomePage() {
  usePageTitle('Trang chủ');
  const [vaccines, setVaccines] = useState([]);
  useEffect(() => {
    let isSubscribe = true;
    (async function () {
      let apiRes = null;
      apiRes = await vaccineApi.getVaccineForHomePage();
      if (apiRes.status === 200 && isSubscribe) {
        setVaccines(apiRes.data);
      }
    })();
    return () => {
      isSubscribe = false;
    };
  }, []);
  return (
    <>
      <HomeIntroduction />
      <Container sx={{ paddingBottom: 5 }}>
        <div className="row">
          <h2 className="home_dv_title position_re col-xs-12">
            <span>DANH MỤC VACXIN</span>
            <a href="/vaccine" className="position_ab view_all_dmvc hidden-xs">
              View all
            </a>
          </h2>
        </div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {vaccines.map((vaccine, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <VaccineCardHomePage {...vaccine} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
