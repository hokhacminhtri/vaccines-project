import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 375,
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: '#4d63a6',
    },
    secondary: {
      main: '#2a388f',
    },
    accent: {
      main: '#ff9900',
    },
  },
});

export default theme;
