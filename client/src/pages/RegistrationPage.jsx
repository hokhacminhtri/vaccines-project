import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Toast from '../components/commons/Toast';
import Registration from '../components/Registration';
import AddressContextProvider from '../contexts/addressContext';
import usePageTitle from '../hooks/usePageTitle';

export default function RegistrationPage() {
  usePageTitle('Đăng ký tiêm chủng');
  const [error, setError] = useState(null);

  const onSubmit = async (value) => {
    console.log(value);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {/* Show Error */}
      <Toast message={error} onClose={() => setError(null)} />

      <AddressContextProvider>
        <Registration onSubmit={onSubmit} />
      </AddressContextProvider>
    </Container>
  );
}
