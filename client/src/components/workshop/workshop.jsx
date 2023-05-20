import { Grid, Card, CardContent, Button, Typography, Stack } from '@mui/material';
import { LocalPhone as LocalPhoneIcon, Link as LinkIcon } from '@mui/icons-material';
import { Image } from 'components/common/common';
import { StyledLeftSideWrapper, ContactsIconWrapper } from './workshop.styles';
import { Services } from './components/components';

const Workshop = () => {
  return (
    <Grid container spacing={4} paddingTop={4} paddingBottom={4}>
      <Grid item xs={8}>
        <StyledLeftSideWrapper>
          <Image
            borderRadius={5}
            width={723}
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
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography variant="h2" marginBottom={3}>
              TEC-SERVICE
            </Typography>
            <Typography variant="body2" color="text.secondary" marginBottom={3}>
              Maksymovycha 18, Vinnyts'ka city council, 21012 Vinnytsia
            </Typography>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              sx={{ textTransform: 'uppercase', marginBottom: 6 }}
            >
              Book Visit
            </Button>
            <Typography variant="h6" marginBottom={3}>
              Contant us
            </Typography>

            <Stack direction="row" alignItems="center" marginBottom={3}>
              <ContactsIconWrapper>
                <LocalPhoneIcon />
              </ContactsIconWrapper>
              <Typography
                variant="body2"
                color="text.primary"
                as="a"
                href="tel:+380674502686"
                sx={{ textDecoration: 'none' }}
              >
                +380 67 450 2686
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <ContactsIconWrapper>
                <LinkIcon />
              </ContactsIconWrapper>
              <Typography
                variant="body2"
                color="text.primary"
                as="a"
                href="https://tec-service.weblium.site/"
                sx={{ textDecoration: 'none' }}
              >
                Web
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export { Workshop };
