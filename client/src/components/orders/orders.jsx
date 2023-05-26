import { Stack, Box, Typography } from '@mui/material';
import { LoadingContainer } from 'components/common/common';
import { UserRole } from 'common/enums/enums';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery, useChangeOrderStatusMutation } from 'store/order/order';
import { OrderCard } from './components/components';
import { useCallback } from 'react';

const Orders = () => {
  const { user } = useSelector(state => ({
    user: state.auth.user
  }));
  const { data: orders = [], isLoading } = useGetOrdersQuery();
  const [changeOrderStatus] = useChangeOrderStatusMutation();

  const handleChangeOrderStatus = useCallback(
    ({ id, status }) =>
      () =>
        changeOrderStatus({ id, status }),
    [changeOrderStatus]
  );

  if (isLoading) {
    return <LoadingContainer height="calc(100vh - 64px)" />;
  }

  return (
    <>
      <Stack direction="column" gap={8} padding={4} sx={{ width: '100%' }}>
        <Typography variant="h2" color="text.primary" marginBottom={4}>
          {user.role === UserRole.ADMIN ? 'Замовлення майстерні' : 'Мої замовлення'}
        </Typography>
        {orders.map(order => (
          <OrderCard
            key={order.id}
            order={order}
            userRole={user.role}
            onChangeStatus={handleChangeOrderStatus}
          />
        ))}
      </Stack>
    </>
  );
};

export { Orders };
