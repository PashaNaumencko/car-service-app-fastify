import {
  ArrowCircleLeftRounded as ArrowCircleLeftRoundedIcon,
  CancelRounded as CancelRoundedIcon
} from '@mui/icons-material';
import { Dialog, DialogContent, Typography } from '@mui/material';
import { useModal, useStepper } from 'hooks/hooks';
import { CreateOrderForm } from './components/components';
import { ButtonDirection, StyledIconButton, StyledModalHeader } from './create-order-modal.styles';

const CreateOrderModal = () => {
  const { activeStep, handleNext, handleBack } = useStepper();
  const { handleClose } = useModal();

  return (
    <Dialog open onClose={handleClose} PaperProps={{ sx: { minWidth: 870 } }}>
      <StyledModalHeader>
        {activeStep > 0 ? (
          <StyledIconButton direction={ButtonDirection.LEFT} onClick={handleBack}>
            <ArrowCircleLeftRoundedIcon />
          </StyledIconButton>
        ) : null}
        <Typography variant="h6">TEC-SERVICE</Typography>
        <Typography variant="subtitle2">
          Maksymovycha 18, Vinnyts'ka city council, 21012 Vinnytsia
        </Typography>
        <StyledIconButton direction={ButtonDirection.RIGHT} onClick={handleClose}>
          <CancelRoundedIcon />
        </StyledIconButton>
      </StyledModalHeader>

      {/* <DialogContent sx={{ padding: '16px' }}> */}
      <CreateOrderForm activeStep={activeStep} onNextStep={handleNext} />
      {/* </DialogContent> */}
    </Dialog>
  );
};

export { CreateOrderModal };
