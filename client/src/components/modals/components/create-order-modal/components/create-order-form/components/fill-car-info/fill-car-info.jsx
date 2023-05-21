import { Select, Input, YearField } from 'components/common/common';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useStepper } from 'hooks/hooks';
import { mapDataToOptions } from 'helpers/helpers';

const FillCarInfo = ({ carBrands }) => {
  const { control } = useFormContext();
  const { handleNext } = useStepper();
  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h2" marginBottom={7}>
        Яким автомобілем ти керуєш?
      </Typography>
      <Typography variant="h6" color="text.disabled" marginBottom={3}>
        Дані автомобіля
      </Typography>
      <Box sx={{ marginBottom: 6 }}>
        <Select
          control={control}
          name="brand"
          label="Марка"
          options={mapDataToOptions(carBrands, 'fullName')}
          paperWidth={500}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Input control={control} name="model" label="Модель" width={500} />
      </Box>
      <Box sx={{ marginBottom: 6 }}>
        <YearField control={control} name="yearOfProduction" label="Рік виробництва" width={500} />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Input control={control} name="licensePlateNumber" label="Номерний знак" width={500} />
      </Box>

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

export { FillCarInfo };
