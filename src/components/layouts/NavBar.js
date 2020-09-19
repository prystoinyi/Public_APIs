import React from "react";
import { Link } from "react-router-dom";
// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    "text-transform": "none",
  },
  appbar: {
    position: "fixed",
    backgroundColor: "rgb(2 2 2 / 55%)",
  },
  appbarMain: {
    position: "static",
  },
}));

function NavBar(props) {
  const classes = useStyles();

  const { loadingAppBar } = props.pixabay;

  return (
    <div className={classes.grow}>
      <AppBar className={loadingAppBar ? classes.appbar : classes.appbarMain}>
        <Toolbar style={{ minHeight: "6vh" }}>
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

const mapStateToProps = (state) => ({
  pixabay: state.pixabay,
});

export default connect(mapStateToProps)(NavBar);
