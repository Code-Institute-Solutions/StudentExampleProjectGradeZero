import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Star';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button variant="outlined" color="secondary">
            Hello, world.
          </Button>
          <MenuList>
        <MenuItem className='MenuItem'>
          <ListItemIcon className='SendIcon'>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes='primary' inset primary="My First Project" />
        </MenuItem>
        </MenuList>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
