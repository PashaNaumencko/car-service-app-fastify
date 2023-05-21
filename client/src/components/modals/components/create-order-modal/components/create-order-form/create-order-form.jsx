import { Box, Button, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useAppForm, useStepper } from 'hooks/hooks';
import { FormProvider } from 'react-hook-form';
import { ChooseServiceStep, FillCarInfo, ChooseVisitDate } from './components/components';
import { CREATE_ORDER_FORM_STEPS, DEFAULT_CREATE_ORDER_FORM_PAYLOAD } from './constants';
import { carBrands, services } from './mockData';

const CreateOrderForm = () => {
  const { activeStep } = useStepper();
  const methods = useAppForm({
    defaultValues: DEFAULT_CREATE_ORDER_FORM_PAYLOAD
    // validationSchema: loginValidationSchema
  });

  const handleSubmitOrder = values => {};

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(handleSubmitOrder)} sx={{ padding: 5 }}>
        <Stepper activeStep={activeStep} sx={{ marginBottom: 10 }}>
          {CREATE_ORDER_FORM_STEPS.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 ? <ChooseServiceStep services={services} /> : null}
        {activeStep === 1 ? <FillCarInfo carBrands={carBrands} /> : null}
        {activeStep === 2 ? <ChooseVisitDate /> : null}
      </Box>
    </FormProvider>
  );
};

export { CreateOrderForm };
