import React from 'react';
import AdminLoginForm from '../../components/admin/Login';
import usePageTitle from '../../hooks/usePageTitle';

export default function LoginPage() {
  usePageTitle('Đăng nhập - Quản trị viên');

  const onLogin = async ({ username, password }) => {
    console.log(username, password);
  };

  return <AdminLoginForm onSubmit={onLogin} />;
}
