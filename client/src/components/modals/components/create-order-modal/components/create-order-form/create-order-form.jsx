import { Box, Dialog, DialogContent, Typography } from '@mui/material';
import { Select, Autocomplete } from 'components/common/common';
import { mapDataToOptions } from 'helpers/helpers';
import { useAppForm } from 'hooks/hooks';
import { carBrands, services } from './mockData';

const DEFAULT_CREATE_ORDER_FORM_PAYLOAD = {
  carBrand: '',
  services: []
};

const CreateOrderForm = () => {
  const { control, handleSubmit, formState } = useAppForm({
    defaultValues: DEFAULT_CREATE_ORDER_FORM_PAYLOAD
    // validationSchema: loginValidationSchema
  });

  const handleSubmitOrder = values => {};

  return (
    <Box as="form" onSubmit={handleSubmit(handleSubmitOrder)}>
      <Select
        control={control}
        name="brand"
        options={mapDataToOptions(carBrands, 'fullName')}
        paperWidth={500}
      />
      <Autocomplete
        control={control}
        name="services"
        options={services}
        displayedLabelName="name"
        paperWidth={500}
      />
    </Box>
  );
};

export { CreateOrderForm };
