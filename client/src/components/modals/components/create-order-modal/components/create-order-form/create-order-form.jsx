import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { useAppForm, useModal, useStepper } from 'hooks/hooks';
import { FormProvider } from 'react-hook-form';
import { notification as notificationService } from 'services/services';
import { useCreateOrderMutation } from 'store/order/order';
import { ChooseServiceStep, ChooseVisitDate, FillCarInfo } from './components/components';
import { CREATE_ORDER_FORM_STEPS, DEFAULT_CREATE_ORDER_FORM_PAYLOAD } from './constants';

const CreateOrderForm = ({ cars, services, workshopId }) => {
  const { activeStep } = useStepper();
  const { handleClose: handleCloseModal } = useModal();
  const methods = useAppForm({
    defaultValues: DEFAULT_CREATE_ORDER_FORM_PAYLOAD
  });
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleSubmitOrder = async values => {
    console.log('values', values);
    await createOrder({
      ...values,
      services: values.services.map(({ id, title, price }) => ({ id, title, price })),
      workshopId
    }).unwrap();
    notificationService.success('Ваше замовлення успішно створено');
    handleCloseModal();
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
        {activeStep === 2 ? <ChooseVisitDate isLoading={isLoading} /> : null}
      </Box>
    </FormProvider>
  );
};

export { CreateOrderForm };
