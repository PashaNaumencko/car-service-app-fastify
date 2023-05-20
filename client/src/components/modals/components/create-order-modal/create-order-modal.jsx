import {
  ArrowCircleLeftRounded as ArrowCircleLeftRoundedIcon,
  CancelRounded as CancelRoundedIcon
} from '@mui/icons-material';
import { Dialog, DialogContent, Typography } from '@mui/material';
import { useModal } from 'hooks/hooks';
import { CreateOrderForm } from './components/components';
import { ButtonDirection, StyledIconButton, StyledModalHeader } from './create-order-modal.styles';

const CreateOrderModal = () => {
  const { handleClose } = useModal();

  return (
    <Dialog open onClose={handleClose} PaperProps={{ sx: { minWidth: 770 } }}>
      <StyledModalHeader>
        <StyledIconButton direction={ButtonDirection.LEFT}>
          <ArrowCircleLeftRoundedIcon />
        </StyledIconButton>
        <Typography variant="h6">TEC-SERVICE</Typography>
        <Typography variant="subtitle2">
          Maksymovycha 18, Vinnyts'ka city council, 21012 Vinnytsia
        </Typography>
        <StyledIconButton direction={ButtonDirection.RIGHT}>
          <CancelRoundedIcon />
        </StyledIconButton>
      </StyledModalHeader>

      <DialogContent>
        <CreateOrderForm />
      </DialogContent>
    </Dialog>
  );
};

export { CreateOrderModal };
