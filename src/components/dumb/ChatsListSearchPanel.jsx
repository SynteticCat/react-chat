import React from 'react'
import TextField from '@material-ui/core/TextField';

class ChatsListSearchPanel extends React.Component {
  render() {
    return (
      <TextField
        placeholder="Search"
        autoFocus={true}
        fullWidth
      />
    );
  }
}

export default ChatsListSearchPanel;
