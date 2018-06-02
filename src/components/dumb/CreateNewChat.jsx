import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 10,
    }
}

class CreateNewChat extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="fab" color="primary" aria-label="add" className="classes.button">
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

CreateNewChat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateNewChat);

