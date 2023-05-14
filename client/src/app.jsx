import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { theme } from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1" color="primary">
        Welcome to Car App Service
      </Typography>
    </ThemeProvider>
  );
};

export { App };
