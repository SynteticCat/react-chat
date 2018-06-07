import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

import titleInitials from "../utils/title-initials";

const styles = theme => ({
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

class Chat extends React.Component {

  /*
  TODO:  scroll

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
  */

  render() {
    const {classes, messages} = this.props;

    return (
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
    );
  }
}

export default withStyles(styles)(Chat);
