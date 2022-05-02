import Container from '@mui/material/Container';
import React from 'react';
import Registration from '../components/Registration';
import AddressContextProvider from '../contexts/addressContext';
import usePageTitle from '../hooks/usePageTitle';

export default function RegistrationPage() {
  usePageTitle('Đăng ký tiêm chủng');

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <AddressContextProvider>
        <Registration />
      </AddressContextProvider>
    </Container>
  );
}
