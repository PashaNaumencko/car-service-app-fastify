import { Grid, Typography } from '@mui/material';
import { Image, LoadingContainer } from 'components/common/common';
import { useParams } from 'react-router-dom';
import { useGetWorkshopByIdQuery } from 'store/workshop/workshop';
import { ContactsCard, Services } from './components/components';
import { StyledLeftSideWrapper } from './workshop.styles';

const Workshop = () => {
  const { id } = useParams();
  const { data: workshop = null, isLoading } = useGetWorkshopByIdQuery(id);

  if (isLoading) {
    return <LoadingContainer />;
  }

  return (
    <Grid container spacing={4} paddingTop={4} paddingBottom={4}>
      <Grid item xs={8}>
        <StyledLeftSideWrapper>
          <Image borderRadius={5} src={workshop?.image?.link} />
          <Typography variant="h2" marginTop={4} marginBottom={3}>
            About
          </Typography>
          <Typography variant="body1" color="text.secondary" marginBottom={4}>
            {workshop?.description}
          </Typography>
          <Typography variant="h2" marginTop={4} marginBottom={3}>
            Services
          </Typography>
          <Services />
        </StyledLeftSideWrapper>
      </Grid>
      <Grid item xs={4}>
        <ContactsCard
          name={workshop?.name}
          address={workshop?.address}
          phoneNumber={workshop?.phoneNumber}
          website={workshop?.website}
        />
      </Grid>
    </Grid>
  );
};

export { Workshop };
