import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { Sign } from 'components/sign/sign';
import { Main } from 'components/common/common';
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
    </ThemeProvider>
  );
};

export { App };
