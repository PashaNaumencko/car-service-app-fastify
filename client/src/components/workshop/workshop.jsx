import { Grid, Typography } from '@mui/material';
import { Image } from 'components/common/common';
import { StyledLeftSideWrapper } from './workshop.styles';
import { Services, ContactsCard } from './components/components';

const Workshop = () => {
  return (
    <Grid container spacing={4} paddingTop={4} paddingBottom={4}>
      <Grid item xs={8}>
        <StyledLeftSideWrapper>
          <Image
            borderRadius={5}
            width={723}
            // eslint-disable-next-line max-len
            src="https://res.cloudinary.com/intercars/image/upload/c_scale,w_800,f_auto,q_auto/v1662642239/workshops_prod2/kzpmbqz9/2315558175.jpg.jpg"
          />
          <Typography variant="h2" marginTop={4} marginBottom={3}>
            About
          </Typography>
          <Typography variant="body1" color="text.secondary" marginBottom={4}>
            "TEC-SERVICE" service station started working in April 2020. Over the years, we have
            tried to provide our customers with the widest possible range of car repair and
            maintenance services. The main goal of our service is to provide a wide range of
            high-quality car repair and maintenance services. When you come to us, you can get
            professional advice on all types of work. Let's get acquainted with the list of
            necessary works and the works to be done in the near future. We will select for you
            high-quality spare parts in several variants, agree on the scope of work and carry out
            delivery and installation of spare parts for your car. We employ only highly qualified
            specialists and masters of their field.
          </Typography>
          <Typography variant="h2" marginTop={4} marginBottom={3}>
            Services
          </Typography>
          <Services />
        </StyledLeftSideWrapper>
      </Grid>
      <Grid item xs={4}>
        <ContactsCard />
      </Grid>
    </Grid>
  );
};

export { Workshop };
