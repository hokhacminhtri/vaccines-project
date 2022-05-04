import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

export default function Toast({
  duration = 6000,
  message,
  severity = 'error',
  onClose,
}) {
  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={duration}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      sx={{ maxWidth: '480px' }}
      onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%', fontSize: '16px' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
