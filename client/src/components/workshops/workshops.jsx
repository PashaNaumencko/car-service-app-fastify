import { Stack } from '@mui/material';
import { Workshop } from './components/components';

const Workshops = () => {
  return (
    <Stack direction="column" gap={8}>
      <Workshop />
      <Workshop />
      <Workshop />
      <Workshop />
    </Stack>
  );
};

export { Workshops };
