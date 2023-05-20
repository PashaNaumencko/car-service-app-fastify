import { Stack } from '@mui/material';
import { ModalVariant } from 'common/enums/enums';
import { useModal } from 'hooks/hooks';
import { WorkshopCard } from './components/components';

const Workshops = () => {
  const { handleOpen } = useModal();

  const handleOpenOrderForm = () => handleOpen({ variant: ModalVariant.CREATE_ORDER });

  return (
    <Stack direction="column" gap={8} padding={4}>
      <WorkshopCard onOpenOrderForm={handleOpenOrderForm} />
      <WorkshopCard onOpenOrderForm={handleOpenOrderForm} />
      <WorkshopCard onOpenOrderForm={handleOpenOrderForm} />
      <WorkshopCard onOpenOrderForm={handleOpenOrderForm} />
    </Stack>
  );
};

export { Workshops };
