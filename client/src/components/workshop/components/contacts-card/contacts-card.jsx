import { Card, CardContent, Button, Typography, Stack } from '@mui/material';
import {
  LocalPhone as LocalPhoneIcon,
  Link as LinkIcon,
  LocationOnOutlined as LocationOnIcon
} from '@mui/icons-material';
import { ContactsIconWrapper } from './contacts-card.styles';

const ContactsCard = () => {
  return (
    <Card>
      <CardContent sx={{ padding: 4 }}>
        <Typography variant="h2" marginBottom={3}>
          TEC-SERVICE
        </Typography>
        <Stack direction="row" alignItems="center" marginBottom={3}>
          <LocationOnIcon color="primary" />
          <Typography variant="body2" color="text.secondary" marginLeft={2}>
            Maksymovycha 18, Vinnyts'ka city council, 21012 Vinnytsia
          </Typography>
        </Stack>

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
            Website
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { ContactsCard };
