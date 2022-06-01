import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ePlusIcon from '../../assets/icons/eplus-icon.png';
import nutriHomeIcon from '../../assets/icons/nutrihome-icon.png';
import logoUrl from '../../assets/images/vnvc-logo.svg';
import theme from '../../configs/theme.config';
import useStyle from './style';

console.log(theme.palette);

const navMenu = [
  {
    name: 'Tìm trung tâm',
    to: '/',
    Icon: LocationOnIcon,
  },
  {
    name: 'Đăng ký tiêm',
    to: '/',
    Icon: CalendarMonthIcon,
  },
  {
    name: 'Đặt mua vaccine',
    to: '/',
    Icon: ShoppingCartIcon,
  },
  {
    name: 'Tư vấn',
    to: '/',
    Icon: ContactSupportIcon,
  },
];

const ePlusLink = {
  to: 'https://eplus.vnvc.vn/',
  icon: ePlusIcon,
};

const nutriHomeLink = {
  to: 'https://nutrihome.vn/',
  icon: nutriHomeIcon,
};

export default function Navbar() {
  const classes = useStyle();
  return (
    <Box borderBottom="solid 1px" borderColor="grey.400" py={2}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between">
          <Link to="/">
            <Box width="8rem" flexShrink={0}>
              <img width="100%" src={logoUrl} alt="" />
            </Box>
          </Link>
          <Stack direction="row" spacing={2}>
            {navMenu.map((item, index) => (
              <Link to={item.to} key={index} className="vertical-center">
                <item.Icon color="primary" />
                <Typography
                  fontSize="0.75rem"
                  variant="inherit"
                  component="strong"
                  color="primary"
                  textTransform="uppercase"
                  ml={0.5}>
                  {item.name}
                </Typography>
              </Link>
            ))}
            <Link to={ePlusLink.to} className="vertical-center">
              <Box width="4rem">
                <img src={ePlusLink.icon} alt="" width="100%" />
              </Box>
            </Link>

            <Link to={nutriHomeLink.to} className="vertical-center">
              <Box width="3rem">
                <img src={nutriHomeLink.icon} alt="" width="100%" />
              </Box>
            </Link>

            <Box className={classes.hotline}>
              <a href="tel:+02873006595" className={classes.phone}>
                Hotline: 028 7300 6595
              </a>
              <p className={classes.openingTime}>
                Mở cửa 7h30 - 17h00 / T2 - CN xuyên trưa
              </p>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
