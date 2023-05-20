import { Box, Container, styled } from '@mui/material';

export const ViewportContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  background: theme.palette.others.background,
  overflow: 'auto'
}));

export const StyledContainer = styled(Container)(({ hasHeader }) => ({
  paddingTop: hasHeader ? '64px' : 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
