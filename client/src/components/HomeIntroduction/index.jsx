import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import introduction from '../../assets/images/introduction.jpg';
import SaleOff01 from '../../assets/images/SaleOff01.jpg';
import SaleOff02 from '../../assets/images/SaleOff02.jpg';
import SaleOff03 from '../../assets/images/SaleOff03.jpg';
import SaleOff04 from '../../assets/images/SaleOff04.jpg';
import SaleOff05 from '../../assets/images/SaleOff05.jpg';
import SaleOff06 from '../../assets/images/SaleOff06.jpg';
import theme from '../../configs/theme.config';
import useStyle from './style';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'SaleOff01',
    imgPath: SaleOff01,
  },
  {
    label: 'SaleOff02',
    imgPath: SaleOff02,
  },
  {
    label: 'SaleOff03',
    imgPath: SaleOff03,
  },
  {
    label: 'SaleOff04',
    imgPath: SaleOff04,
  },
  {
    label: 'SaleOff05',
    imgPath: SaleOff05,
  },
];

const bottomImage = {
  label: 'SaleOff06',
  imgPath: SaleOff06,
};

function SaleOff() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Container disableGutters maxWidth="100%">
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Box paddingTop="0.25rem">
          <img src={bottomImage.imgPath} alt={bottomImage.label} />
        </Box>
      </Container>
    </Box>
  );
}

function Introduction() {
  const classes = useStyle(theme);
  return (
    <Box className={classes.introduction}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <Box width="30rem" flexShrink={0} marginRight="1rem">
            <p
              style={{
                borderBottom: 'solid 1px',
                borderColor: 'grey.400',
                paddingBottom: '0.25rem',
              }}>
              <strong>GIỚI THIỆU</strong>
            </p>
            <p>
              Hệ thống tiêm chủng VNVC (thuộc Công ty Cổ phần Vacxin Việt Nam)
              chính thức đi vào hoạt động từ tháng 6 năm 2017. Trong bối cảnh
              thế giới đang phải đương đầu với tình trạng biến đổi phức tạp của
              các chủng vi khuẩn gây bệnh cũng như sự thiếu hụt vắc xin tại Việt
              Nam như hiện nay, Hệ thống tiêm chủng VNVC ra đời nhằm cung cấp
              cho trẻ em Việt Nam những loại vắc xin có chất lượng tốt nhất cùng
              với hệ thống phòng tiêm chủng an toàn, hiện đại và cao cấp.
            </p>
            <p>
              Với những mục tiêu đó, Công ty VNVC đã xây dựng dây chuyền bảo
              quản lạnh (Cold chain) đạt tiêu chuẩn GSP …
            </p>
            <a href="/" style={{ float: 'right', paddingBottom: '0.25rem' }}>
              Xem thêm
            </a>
          </Box>
          <Box width="35rem" flexShrink={0}>
            <img width="100%" src={introduction} alt="introduction" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function HomeIntroduction() {
  return (
    <>
      <SaleOff />
      <Introduction />
    </>
  );
}

export default HomeIntroduction;
