import { Typography, Button } from '@mui/material';

const Home = ({ onLogout }) => {
  return (
    <>
      <Typography variant="h4" marginBottom={10}>
        Home
      </Typography>
      <Button onClick={onLogout}>Log out</Button>
    </>
  );
};

export { Home };
