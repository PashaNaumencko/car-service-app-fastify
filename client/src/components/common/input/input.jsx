import { useController } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { StyledLabel } from './input.styles';

const Input = ({
  id,
  name,
  control,
  label,
  placeholder,
  type,
  endAdornment,
  fullWidth
}) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control
  });

  const handleChange = value => {
    field.onChange(value);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      variant="standard"
      sx={{ marginBottom: 6.5 }}
    >
      <StyledLabel shrink htmlFor={id}>
        {label}
      </StyledLabel>
      <TextField
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        type={type}
        value={field.value}
        endAdornment={endAdornment}
        onChange={handleChange}
        helperText={error?.message}
        error={Boolean(error?.message)}
      />
    </FormControl>
  );
};

export { Input };
