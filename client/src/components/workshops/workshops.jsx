import { Stack } from '@mui/material';
import { ModalVariant } from 'common/enums/enums';
import { LoadingContainer } from 'components/common/common';
import { useModal } from 'hooks/hooks';
import { useGetWorkshopsQuery } from 'store/workshop/workshop';
import { WorkshopCard } from './components/components';

const Workshops = () => {
  const { handleOpen } = useModal();
  const { data = [], isFetching } = useGetWorkshopsQuery();

  const handleOpenOrderForm = () => handleOpen({ variant: ModalVariant.CREATE_ORDER });

  if (isFetching) {
    return <LoadingContainer height="calc(100vh - 64px)" />;
  }

  return (
    <Stack direction="column" gap={8} padding={4}>
      {data.map(workshop => (
        <WorkshopCard key={workshop.id} workshop={workshop} onOpenOrderForm={handleOpenOrderForm} />
      ))}
    </Stack>
  );
};

export { Workshops };
