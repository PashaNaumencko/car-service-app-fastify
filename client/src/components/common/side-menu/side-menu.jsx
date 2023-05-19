import {
  useTheme,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  CarRepair as CarRepairIcon,
  ListAlt as ListAltIcon
} from '@mui/icons-material';
import { StyledDrawer, StyledDrawerHeader } from './side-menu.styles';

const SideMenu = ({ isOpen, onClose }) => {
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
          <ListItemButton
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
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
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
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export { SideMenu };
