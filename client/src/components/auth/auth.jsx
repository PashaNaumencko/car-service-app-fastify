import { Typography } from '@mui/material';
import { AppRoute, DataStatus } from 'common/enums/enums';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActionCreator } from 'store/auth/auth';
import { LoginForm } from './components/login-form/login-form';
import { StyledLoginFormContainer } from './sign.styles';

const Sign = () => {
  const dispatch = useDispatch();
  const { dataStatus, loginError } = useSelector(state => ({
    dataStatus: state.auth.dataStatus,
    loginError: state.auth.loginError
  }));
  const { pathname } = useLocation();

  const handleLogin = useCallback(
    payload => dispatch(authActionCreator.login(payload)),
    [dispatch]
  );

  // const handleRegister = useCallback(
  //   registerPayload => dispatch(profileActionCreator.register(registerPayload)),
  //   [dispatch]
  // );

  const getScreen = path => {
    switch (path) {
      case AppRoute.LOGIN: {
        return (
          <LoginForm
            onLogin={handleLogin}
            isLoading={dataStatus === DataStatus.PENDING}
            errorMessage={loginError}
          />
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <StyledLoginFormContainer elevation={0}>
      <Typography variant="h4" marginBottom={10}>
        Welcome to Car Service App!
      </Typography>
      {getScreen(pathname)}
    </StyledLoginFormContainer>
  );
};

export { Sign };
