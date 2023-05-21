import { Box, Typography, Stack, Button } from '@mui/material';
import { Autocomplete, Input } from 'components/common/common';
import { useFormContext } from 'react-hook-form';
import { useStepper } from 'hooks/hooks';

const ChooseServiceStep = ({ services }) => {
  const { control } = useFormContext();
  const { handleNext } = useStepper();

  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h2" color="primary" marginBottom={1}>
        Вітаємо!
      </Typography>
      <Typography variant="h2" marginBottom={16}>
        Що потрібно вашому автомобілю?
      </Typography>
      <Box sx={{ marginBottom: 6 }}>
        <Autocomplete
          control={control}
          name="services"
          options={services}
          displayedLabelName="name"
          paperWidth={500}
        />
      </Box>

      <Input
        control={control}
        name="description"
        rows={5}
        label="Опишіть проблему"
        placeholder="Наприклад, коли рухається автомобіль чути стукіт правого колеса..."
        width={500}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleNext}
        sx={{ textTransform: 'uppercase', maxWidth: 500, marginTop: 3 }}
      >
        Далі
      </Button>
    </Stack>
  );
};

export { ChooseServiceStep };
