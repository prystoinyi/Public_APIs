import React from "react";
import { Link } from "react-router-dom";
// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    "text-transform": "none",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            className={classes.button}
            size="large"
            component={Link}
            to="/"
          >
            Public APIs
          </Button>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
