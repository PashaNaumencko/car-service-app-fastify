import { useMemo } from 'react';
import { ModalVariant } from 'common/enums/enums';
import { useModal } from 'hooks/hooks';
import { CreateOrderModal } from './components/components';

const Modals = () => {
  const { modalConfig } = useModal();

  const modalsByVariant = useMemo(
    () => ({
      [ModalVariant.CREATE_ORDER]: <CreateOrderModal />,
      DEFAULT: null
    }),
    []
  );

  return modalsByVariant[modalConfig.variant] ?? modalsByVariant.DEFAULT;
};

export { Modals };
