import Footer from '../components/Footer';
import Header from '../components/Header';
import {Container,Grid} from '@mui/material';
import HomeIntroduction from '../components/HomeIntroduction';
import usePageTitle from '../hooks/usePageTitle';
import React, { useEffect, useState } from 'react';
import vaccineApi from '../apis/vaccineApi';
import VaccineCardHomePage from '../components/VaccineCardHomePage';

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
  },[]);
  return (
    <>
      <Header />
      <HomeIntroduction />
      <Container sx={{paddingBottom:5}}>
        <div class="row">
          <h2 class="home_dv_title position_re col-xs-12">
            <span>DANH MỤC VACXIN</span>
            <a href="/vaccine" class="position_ab view_all_dmvc hidden-xs"> View all </a>
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

      <Footer />
    </>
  );
}
