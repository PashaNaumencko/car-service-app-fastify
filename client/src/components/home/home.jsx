import { Typography, Button } from '@mui/material';
import { Workshops } from '../workshops/workshops';

const Home = ({ onLogout }) => {
  return (
    <>
      <Typography variant="h4" marginBottom={10}>
        Home
      </Typography>
      <Button onClick={onLogout}>Log out</Button>
      <Workshops />
    </>
  );
};

export { Home };
