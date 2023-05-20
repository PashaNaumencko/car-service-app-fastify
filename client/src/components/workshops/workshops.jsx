import { Stack } from '@mui/material';
import { WorkshopCard } from './components/components';

const Workshops = () => {
  return (
    <Stack direction="column" gap={8} padding={4}>
      <WorkshopCard />
      <WorkshopCard />
      <WorkshopCard />
      <WorkshopCard />
    </Stack>
  );
};

export { Workshops };
