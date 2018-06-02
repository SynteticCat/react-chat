import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import titleInitials from './utils/title-initials';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import ChatsListSearchPanel from './components/dumb/ChatsListSearchPanel';
import ChatsList from './components/dumb/ChatsList';
import ChatsListPanel from './components/dumb/ChatsListPanel';

import { chats, messages} from './mock-data';

// TODO: I think styles don't work correctly
import CreateNewChat from './components/dumb/CreateNewChat';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    maxHeight: 733,
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
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
  chatLayout: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    paddingBottom: '120px',
    marginLeft: '320px',
    height: '100%',
    width: `calc(100% - 320px)`,
  },
  messagesWrapper: {
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 362px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `$(theme.spacing.unit)px ${theme.spacing.unit * 6}px`,
  },
  messageWrapperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff',
  },
  messageUserAvatar: {
    margin: theme.spacing.unit,
  },
});

class App extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar color='primary' className={classes.appBar}>
          <Toolbar>
            <Typography variant='title' color='inherit' noWrap>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>

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

        <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper} ref='messagesWrapper'>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = (message.sender === 'me');

              const userAvatar =  (
                <Avatar className={classes.messageUserAvatar}>
                  {titleInitials(message.sender)}
                </Avatar>
              );

              return (
                <div key={index} className={classnames(
                  classes.messageWrapper,
                  isMessageFromMe && classes.messageWrapperFromMe
                )}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={classnames(
                    classes.message,
                    isMessageFromMe && classes.messageFromMe
                  )}>
                    <Typography variant='caption'>
                      {message.sender}
                    </Typography>
                    {<Typography variant='body1'>
                      {message.content}
                    </Typography>}
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              );
            })}
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder='Your message'/>
            </Paper>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
