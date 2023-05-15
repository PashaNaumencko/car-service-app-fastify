import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
// import { profileActionCreator } from 'store/actions.js';
// import { Image } from 'components/common/common.js';
import { LoginForm } from './components/login-form/login-form';
import { StyledLoginFormContainer } from './sign.styles.js';

const Sign = () => {
  const { pathname } = useLocation();

  // const handleLogin = useCallback(
  //   loginPayload => dispatch(profileActionCreator.login(loginPayload)),
  //   [dispatch]
  // );

  // const handleRegister = useCallback(
  //   registerPayload => dispatch(profileActionCreator.register(registerPayload)),
  //   [dispatch]
  // );

  const getScreen = path => {
    switch (path) {
      case AppRoute.LOGIN: {
        return <LoginForm onLogin={() => {}} />;
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
