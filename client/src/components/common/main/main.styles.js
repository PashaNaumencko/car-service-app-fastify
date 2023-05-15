import { Box, Container, styled } from '@mui/material';

export const ViewportContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 'calc(100vh - 56px)',
  minHeight: '450px',
  background: theme.palette.others.background
}));

export const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
