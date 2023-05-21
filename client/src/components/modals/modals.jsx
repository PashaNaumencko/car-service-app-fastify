import { ModalVariant } from 'common/enums/enums';
import { StepperProvider } from 'contexts/contexts';
import { useModal } from 'hooks/hooks';
import { useMemo } from 'react';
import { CreateOrderModal } from './components/components';

const Modals = () => {
  const { modalConfig } = useModal();

  const modalsByVariant = useMemo(
    () => ({
      [ModalVariant.CREATE_ORDER]: (
        <StepperProvider>
          <CreateOrderModal />
        </StepperProvider>
      ),
      DEFAULT: null
    }),
    []
  );

  return modalsByVariant[modalConfig.variant] ?? modalsByVariant.DEFAULT;
};

export { Modals };
