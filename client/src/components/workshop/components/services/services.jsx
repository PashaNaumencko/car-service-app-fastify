import { Button, Typography, Stack } from '@mui/material';
import { StyledServiceItem } from './services.styles';

const Services = () => {
  return (
    <Stack
      direction="column"
      gap={4}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <StyledServiceItem>
        <Stack direction="row" alignItems="center">
          <Typography variant="body2" color="text.primary" marginRight={3}>
            Replacement of engine oil and oil filter
          </Typography>
          <Typography variant="h6">from UAH 350</Typography>
        </Stack>

        <Button variant="outlined" color="primary">
          Order
        </Button>
      </StyledServiceItem>

      <StyledServiceItem>
        <Stack direction="row" alignItems="center">
          <Typography variant="body2" color="text.primary" marginRight={3}>
            Diagnostics
          </Typography>
          <Typography variant="h6">from UAH 150</Typography>
        </Stack>

        <Button variant="outlined" color="primary">
          Order
        </Button>
      </StyledServiceItem>

      <StyledServiceItem>
        <Stack direction="row" alignItems="center">
          <Typography variant="body2" color="text.primary" marginRight={3}>
            Checking the steering system
          </Typography>
          <Typography variant="h6">from UAH 500</Typography>
        </Stack>

        <Button variant="outlined" color="primary">
          Order
        </Button>
      </StyledServiceItem>
    </Stack>
  );
};

export { Services };
