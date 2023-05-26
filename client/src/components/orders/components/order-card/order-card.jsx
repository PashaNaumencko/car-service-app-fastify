import {
  AddRounded as AddRoundedIcon,
  CalendarMonthRounded as CalendarMonthRoundedIcon,
  CancelRounded as CancelRoundedIcon,
  CheckRounded as CheckRoundedIcon
} from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { OrderStatus, UserRole } from 'common/enums/enums';
import moment from 'moment';
import { memo } from 'react';
import { StyledCard, StyledCardContent } from './order-card.styles';

const statusLabels = {
  [OrderStatus.REQUESTED]: {
    title: 'Очікує підтвердження',
    color: 'secondary'
  },
  [OrderStatus.ACCEPTED]: {
    title: 'Прийнято в роботу',
    color: 'primary'
  },
  [OrderStatus.REJECTED]: {
    title: 'Відхилено',
    color: 'error'
  },
  [OrderStatus.COMPLETED]: {
    title: 'Виконано',
    color: 'success'
  }
};

const OrderCard = memo(({ order, userRole, onChangeStatus }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Stack direction="column" gap={2} sx={{ width: '100%' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" marginBottom={2}>
                {order.car.brand} {order.model}
              </Typography>
              <Typography variant="body2" color="text.secondary" marginBottom={2}>
                Рік випуску: {order.yearOfProduction}
              </Typography>
              <Typography variant="body2" color="text.secondary" marginBottom={2}>
                Номерний знак: {order.licensePlateNumber}
              </Typography>
              <Stack direction="row" gap={4} alignItems="center" marginBottom={4}>
                <CalendarMonthRoundedIcon />
                <Typography variant="body2" color="text.secondary">
                  Дата візиту: {moment(order.visitDate).format('MMMM Do, YYYY HH:mm')}
                </Typography>
              </Stack>
            </Box>
            <Chip
              label={statusLabels[order.status].title}
              color={statusLabels[order.status].color}
            />
          </Stack>

          <Stack direction="column" spacing={2} maxWidth="30%">
            <Typography variant="body2" color="text.secondary" marginBottom={2}>
              Обрані послуги:
            </Typography>
            {order.services.map(service => (
              <Chip key={service.id} label={service.title} color="secondary" />
            ))}
          </Stack>

          <Stack direction="row" justifyContent="space-between" gap={4} marginTop={5}>
            <Typography variant="body2" color="text.primary">
              {order.description}
            </Typography>
          </Stack>
          {userRole === UserRole.ADMIN ? (
            <Stack direction="row-reverse" alignItems="center" gap={4} marginTop={5}>
              {order.status === OrderStatus.REQUESTED ? (
                <>
                  <Button
                    size="large"
                    startIcon={<CancelRoundedIcon />}
                    variant="outlined"
                    color="error"
                    onClick={onChangeStatus({ id: order.id, status: OrderStatus.REJECTED })}
                  >
                    Відхилити
                  </Button>
                  <Button
                    size="large"
                    startIcon={<AddRoundedIcon />}
                    variant="contained"
                    color="primary"
                    onClick={onChangeStatus({ id: order.id, status: OrderStatus.ACCEPTED })}
                  >
                    Прийняти
                  </Button>
                </>
              ) : null}

              {order.status === OrderStatus.ACCEPTED ? (
                <Button
                  size="large"
                  startIcon={<CheckRoundedIcon />}
                  variant="contained"
                  color="success"
                  onClick={onChangeStatus({ id: order.id, status: OrderStatus.COMPLETED })}
                >
                  Виконати
                </Button>
              ) : null}
            </Stack>
          ) : null}
        </Stack>
      </StyledCardContent>
    </StyledCard>
  );
});

OrderCard.displayName = 'OrderCard';

export { OrderCard };
