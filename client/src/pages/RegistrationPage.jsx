import Container from '@mui/material/Container';
import React from 'react';
import Registration from '../components/Registration';
import usePageTitle from '../hooks/usePageTitle';

export default function RegistrationPage() {
  usePageTitle('Đăng ký tiêm chủng');

  return (
    <Container maxWidth="lg">
      <Registration />
    </Container>
  );
}
