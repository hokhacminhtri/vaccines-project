import { yupResolver } from '@hookform/resolvers/yup';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOnIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { MAX } from '../../../constants/validation';
import '../../../styles/admin/login.css';
import useStyle from './style';

function chooseErrorMessage(errors = {}) {
  for (const field in errors) {
    if (errors[field]?.message) {
      return errors[field].message;
    }
  }
}

const schema = yup.object({
  username: yup
    .string()
    .trim()
    .required('Vui lòng nhập username')
    .max(MAX.ADMIN_USERNAME, `Tối đa ${MAX.ADMIN_USERNAME} ký tự`),
  password: yup
    .string()
    .trim()
    .required('Vui lòng nhập mật khẩu')
    .max(MAX.PASSWORD, `Tối đa ${MAX.PASSWORD} ký tự`),
});

export default function AdminLoginForm({ onSubmit }) {
  const classes = useStyle();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onTogglePasswordField = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="md">
      <Box className={classes.wrapper}>
        <Typography
          variant="inherit"
          component="h1"
          textAlign="center"
          mb={4}
          className={classes.title}>
          Admin | Đăng nhập
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {Object.keys(errors).length > 0 && (
              <Alert severity="error">{chooseErrorMessage(errors)}</Alert>
            )}

            <TextField
              error={Boolean(errors.username)}
              name="username"
              id="username"
              label="username"
              variant="outlined"
              size="small"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle fontSize="inherit" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                ...register('username'),
              }}
            />
            <TextField
              error={Boolean(errors.password)}
              name="password"
              id="password"
              label="Mật khẩu"
              variant="outlined"
              size="small"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="inherit" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start" className="cursor-pointer">
                    {showPassword ? (
                      <VisibilityOnIcon
                        fontSize="inherit"
                        onClick={onTogglePasswordField}
                      />
                    ) : (
                      <VisibilityOffIcon
                        fontSize="inherit"
                        onClick={onTogglePasswordField}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              inputProps={{
                ...register('password'),
              }}
            />

            <Button variant="contained" size="medium" type="submit">
              Đăng nhập
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
