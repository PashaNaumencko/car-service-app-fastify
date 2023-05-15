import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';
import { useAppForm } from 'hooks/hooks';
import { useState } from 'react';
import { Input } from 'components/common/common';
import { login as loginValidationSchema } from 'validation-schemas/validation-schemas.js';
import { StyledForm } from './login-form.styles';

const DEFAULT_LOGIN_FORM_PAYLOAD = {
  email: '',
  password: ''
};

const LoginForm = ({ onLogin }) => {
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
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        control={control}
        name="email"
        fullWidth
      />
      <Input
        id="password"
        label="Password"
        type={isPasswordShown ? 'text' : 'password'}
        placeholder="••••••"
        control={control}
        name="password"
        fullWidth
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
          The email and password you entered did not match our records. Please
          double-check and try again.
        </Typography>
      </Box>
      <Button
        color="primary"
        size="large"
        variant="contained"
        fullWidth
        type="submit"
        disabled={!formState.isDirty || !formState.isValid || false}
      >
        Sign in
      </Button>
    </StyledForm>
  );
};

export { LoginForm };
