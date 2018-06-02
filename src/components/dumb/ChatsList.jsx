import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import { chats } from '../../mock-data';

const styles = {
    root: {
        height: "calc(100% - 56px)",
        overflowY: "scroll"
    }
}

class ChatsList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <List className="classes.root">
                {chats.map((chat, index) => (
                    <ListItem key={index} button>
                        <Avatar>{chat.title[0]}</Avatar>
                        <ListItemText primary={chat.title} secondary={chat.time}/>
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default ChatsList;
