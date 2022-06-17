import { Box, CircularProgress } from '@mui/material';

export default function GlobalLoading() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
      <CircularProgress color="primary" />
    </Box>
  );
}
