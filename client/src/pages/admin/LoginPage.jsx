import React from 'react';
import AdminLoginForm from '../../components/admin/Login';

export default function LoginPage() {
  const onLogin = async ({ username, password }) => {
    console.log(username, password);
  };

  return <AdminLoginForm onSubmit={onLogin} />;
}
