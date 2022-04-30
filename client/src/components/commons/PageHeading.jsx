import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import logoUrl from '../../assets/images/vnvc-logo.svg';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,

  fontSize: 10,
  padding: '1.6em 2em',

  [theme.breakpoints.down('sm')]: {
    fontSize: 8,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '1.8em',
  color: theme.palette.grey[600],
}));

export default function PageHeading({ title = '' }) {
  return (
    <Wrapper>
      <img src={logoUrl} alt="VNVC Logo" style={{ height: '3em' }} />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ margin: '0 1em' }}
      />
      <Title variant="h6" component="h1">
        {title}
      </Title>
    </Wrapper>
  );
}
