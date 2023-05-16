import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRoute } from 'common/enums/enums';
import { Main } from 'components/common/common';
import { Sign } from 'components/auth/auth';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Route, Routes } from 'react-router-dom';
import { theme } from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main>
        <Routes>
          <Route path={AppRoute.LOGIN} element={<Sign />} />
          <Route path={AppRoute.REGISTRATION} element={<Sign />} />
          <Route path={AppRoute.ANY} element={<></>} />
        </Routes>
      </Main>
      <NotificationContainer />
    </ThemeProvider>
  );
};

export { App };
