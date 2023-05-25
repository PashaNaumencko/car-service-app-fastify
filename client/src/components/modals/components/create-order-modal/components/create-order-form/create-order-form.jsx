import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { useAppForm, useStepper } from 'hooks/hooks';
import { FormProvider } from 'react-hook-form';
import { ChooseServiceStep, ChooseVisitDate, FillCarInfo } from './components/components';
import { CREATE_ORDER_FORM_STEPS, DEFAULT_CREATE_ORDER_FORM_PAYLOAD } from './constants';

const CreateOrderForm = ({ cars, services, workshopId }) => {
  const { activeStep } = useStepper();
  const methods = useAppForm({
    defaultValues: DEFAULT_CREATE_ORDER_FORM_PAYLOAD
  });

  const handleSubmitOrder = values => {
    console.log('values', values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        as="form"
        id="hook-form"
        noValidate
        onSubmit={methods.handleSubmit(handleSubmitOrder)}
        sx={{ padding: 5 }}
      >
        <Stepper activeStep={activeStep} sx={{ marginBottom: 10 }}>
          {CREATE_ORDER_FORM_STEPS.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 ? <ChooseServiceStep serviceOptions={services} /> : null}
        {activeStep === 1 ? <FillCarInfo carOptions={cars} /> : null}
        {activeStep === 2 ? <ChooseVisitDate /> : null}
      </Box>
    </FormProvider>
  );
};

export { CreateOrderForm };
