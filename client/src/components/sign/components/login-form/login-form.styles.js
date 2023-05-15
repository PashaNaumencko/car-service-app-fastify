import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  padding: theme.spacing(0, 15)
}));
