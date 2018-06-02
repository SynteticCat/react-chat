import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

const styles = {
    root: {
        position: 'fixed',
        width: '100%',
    },
};

class ChatsListPanel extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <BottomNavigation
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
            </BottomNavigation>
        );
    }
}

ChatsListPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatsListPanel);
