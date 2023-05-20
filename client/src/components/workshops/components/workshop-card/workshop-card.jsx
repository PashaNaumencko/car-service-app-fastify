import { LocalPhone as LocalPhoneIcon } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { AppRoute } from 'common/enums/enums';
import { Image } from 'components/common/common';
import { StyledCard, StyledCardContent, StyledWorkshopLink } from './workshop-card.styles';

const WorkshopCard = ({ onOpenOrderForm }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Image
          width={260}
          borderRadius={5}
          // eslint-disable-next-line max-len
          src="https://res.cloudinary.com/intercars/image/upload/c_fit,h_400,w_400,f_auto,q_auto/v1666014168/workshops_prod2/v26vx2xm/IMG_20201208_152840_1666014164656.jpg"
        />
        <Stack direction="column" gap={2}>
          <StyledWorkshopLink to={`${AppRoute.WORKSHOP}/11`}>
            <Typography variant="h6">Workshop Name</Typography>
          </StyledWorkshopLink>
          <Typography variant="body2" color="text.secondary">
            Maksymovycha 18, Vinnyts'ka city council, 21012 Vinnytsia
          </Typography>
          <Stack direction="row" gap={4} alignItems="center">
            <LocalPhoneIcon color="primary" />
            <Typography variant="body2" color="text.secondary" as="a" href="tel:+380674502686">
              +380 67 450 2686
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" gap={4} marginTop={5}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{
                width: 400,
                overflow: 'hidden',
                whiteSpace: 'pre-wrap',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
                display: '-webkit-box'
              }}
            >
              Extensive experience in servicing cars. We carry out high-quality diagnostics and car
              repairs with a guarantee. Selection of spare parts. Services: -Diagnosis and repair of
              the chassis. -Maintenance (engine oil and filter, automatic transmission, replacement
              of those fluids) - Brake system repair - Engine diagnostics and repair -Endoscopy of
              engine cylinders
            </Typography>
            <Button size="large" variant="outlined" color="primary" onClick={onOpenOrderForm}>
              Book visit
            </Button>
          </Stack>
        </Stack>
      </StyledCardContent>
    </StyledCard>
  );
};

export { WorkshopCard };
