import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import accountApi from '../../apis/accountApi';
import AdminLoginForm from '../../components/admin/Login';
import { ACCESS_TOKEN_LS_KEY } from '../../constants';
import { UserContext } from '../../contexts/userContext';
import usePageTitle from '../../hooks/usePageTitle';

export default function LoginPage() {
  usePageTitle('Đăng nhập - Quản trị viên');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { onChangeValue, isAuth } = useContext(UserContext);

  useEffect(() => {
    if (isAuth) navigate('/');
    return () => {};
  }, [isAuth]);

  const onLogin = async ({ username, password }) => {
    try {
      const apiRes = await accountApi.postLogin(username, password);
      if (apiRes.status === 200) {
        const { jwt } = apiRes.data;
        localStorage.setItem(ACCESS_TOKEN_LS_KEY, jwt);
        onChangeValue({ isAuth: true, username });
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Đăng nhập thất bại');
      }
    }
  };

  return (
    <>
      <AdminLoginForm onSubmit={onLogin} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={() => setError(null)}>
        <Alert
          onClose={() => setError(null)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
