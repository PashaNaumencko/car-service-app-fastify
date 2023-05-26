import {
  CarRepair as CarRepairIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ListAlt as ListAltIcon
} from '@mui/icons-material';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  useTheme
} from '@mui/material';
import { AppRoute } from 'common/enums/enums';
import { useLocation, NavLink } from 'react-router-dom';
import { StyledDrawer, StyledDrawerHeader } from './side-menu.styles';

const SideMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <StyledDrawer variant="permanent" isOpen={isOpen}>
      <StyledDrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </StyledDrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <Link
            component={NavLink}
            to={AppRoute.ROOT}
            underline="none"
            color="initial"
            sx={{ display: 'block' }}
          >
            <ListItemButton
              selected={location.pathname === AppRoute.ROOT}
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? 'initial' : 'center',
                px: 4.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <CarRepairIcon />
              </ListItemIcon>
              <ListItemText primary="Workshops" sx={{ opacity: isOpen ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <Link
            component={NavLink}
            to={AppRoute.ORDERS}
            underline="none"
            color="initial"
            sx={{ display: 'block' }}
          >
            <ListItemButton
              selected={location.pathname === AppRoute.ORDERS}
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? 'initial' : 'center',
                px: 4.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Ongoing requests" sx={{ opacity: isOpen ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export { SideMenu };
