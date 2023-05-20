import { Box, Typography, Stepper, Step, StepLabel, Stack, Button } from '@mui/material';
import { Select, Autocomplete, Input } from 'components/common/common';
import { mapDataToOptions } from 'helpers/helpers';
import { useAppForm } from 'hooks/hooks';
import { carBrands, services } from './mockData';
import { CREATE_ORDER_FORM_STEPS, DEFAULT_CREATE_ORDER_FORM_PAYLOAD } from './constants';

const CreateOrderForm = ({ activeStep, onNextStep }) => {
  const { control, handleSubmit, formState } = useAppForm({
    defaultValues: DEFAULT_CREATE_ORDER_FORM_PAYLOAD
    // validationSchema: loginValidationSchema
  });

  const handleSubmitOrder = values => {};

  return (
    <Box as="form" onSubmit={handleSubmit(handleSubmitOrder)} sx={{ padding: 5 }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: 10 }}>
        {CREATE_ORDER_FORM_STEPS.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? (
        <Stack direction="column" alignItems="center">
          <Typography variant="h2" color="primary">
            Вітаємо!
          </Typography>
          <Typography variant="h2" marginBottom={4}>
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
            width={500}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onNextStep}
            sx={{ textTransform: 'uppercase', maxWidth: 500, marginTop: 3 }}
          >
            Next
          </Button>
        </Stack>
      ) : null}
      {activeStep === 1 ? (
        <Stack direction="column" alignItems="center">
          <Select
            control={control}
            name="brand"
            options={mapDataToOptions(carBrands, 'fullName')}
            paperWidth={500}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onNextStep}
            sx={{ textTransform: 'uppercase' }}
          >
            Next
          </Button>
        </Stack>
      ) : null}
      {activeStep === 1 ? <Stack direction="column" alignItems="center"></Stack> : null}
    </Box>
  );
};

export { CreateOrderForm };
