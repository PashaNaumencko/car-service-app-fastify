import { styled, AppBar } from '@mui/material';
import { DRAWER_WIDTH } from 'common/constants/constants';

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'isDrawerOpen'
})(({ theme, isDrawerOpen }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(isDrawerOpen && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));
