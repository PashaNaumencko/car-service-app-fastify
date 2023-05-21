import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';
import { Box, Stack, Button, IconButton, InputAdornment, Typography } from '@mui/material';
import { Input } from 'components/common/common';
import { AppRoute } from 'common/enums/enums';
import { useAppForm } from 'hooks/hooks';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { login as loginValidationSchema } from 'validation-schemas/validation-schemas.js';
import { StyledForm } from '../../sign.styles';

const DEFAULT_LOGIN_FORM_PAYLOAD = {
  email: '',
  password: ''
};

const LoginForm = ({ onLogin, isLoading, errorMessage }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { control, handleSubmit, formState } = useAppForm({
    defaultValues: DEFAULT_LOGIN_FORM_PAYLOAD,
    validationSchema: loginValidationSchema
  });

  const handleSumbitLogin = values => {
    onLogin(values);
  };

  const handleShownPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSumbitLogin)}>
      <Typography variant="h6" marginBottom={3}>
        Login to your account
      </Typography>
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        control={control}
        name="email"
        fullWidth
        width={350}
      />
      <Input
        id="password"
        label="Password"
        type={isPasswordShown ? 'text' : 'password'}
        placeholder="••••••"
        control={control}
        name="password"
        fullWidth
        width={350}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShownPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {isPasswordShown ? (
                <VisibilityOffIcon width={24} height={24} />
              ) : (
                <VisibilityIcon width={24} height={24} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      <Box
        sx={{
          maxWidth: 350,
          marginBottom: 4,
          dispay: 'flex',
          justifyContent: 'center'
        }}
      >
        <Typography variant="subtitle1" color="others.error">
          {errorMessage}
        </Typography>
      </Box>
      <Button
        color="primary"
        size="large"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ marginBottom: 8 }}
        disabled={!formState.isDirty || !formState.isValid || isLoading}
      >
        Sign in
      </Button>
      <Stack direction="row">
        <Typography variant="subtitle2" marginRight={2}>
          New to us?
        </Typography>
        <NavLink to={AppRoute.REGISTRATION}>Sign Up</NavLink>
      </Stack>
    </StyledForm>
  );
};

export { LoginForm };
