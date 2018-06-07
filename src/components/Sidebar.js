import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Avatar from '@material-ui/core/Avatar';
import titleInitials from "../utils/title-initials";

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    height: '100%',
    width: 320,
  },
  drawerHeader: {
    ... theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  chatsList: {
    height: `calc(100% - 56px)`,
    overflowY: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
});

const Sidebar = ({classes, chats}) => (
  <Drawer
    variant='permanent'
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <TextField
        fullWidth
        margin='normal'
        placeholder='Search'
        autoFocus={true} />
    </div>
    <Divider />
    <List className={classes.chatsList}>
      {chats.map((chat, index) => (
        <ListItem key={index} button>
          <Avatar>{titleInitials(chat.title)}</Avatar>
          <ListItemText primary={chat.title} secondary={chat.time}/>
        </ListItem>
      ))}
    </List>
    <Button
      variant='fab'
      color='primary'
      className={classes.newChatButton}
    >
      <AddIcon />
    </Button>
    <Divider />
    <BottomNavigation showLabels>
      <BottomNavigationAction label='My Chats' icon={<RestoreIcon />}/>
      <BottomNavigationAction label='Explore' icon={<ExploreIcon />}/>
    </BottomNavigation>
  </Drawer>
);


export default withStyles(styles)(Sidebar);
