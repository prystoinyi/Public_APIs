import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// MUI stuff
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Hidden,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
// Icons
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SearchIcon from "@material-ui/icons/Search";
// Redux stuff
import { connect } from "react-redux";
import { searchTrackList } from "../../actions/musixmatchActions";

const useStyles = (theme) => ({
  root: {
    padding: "15px",
    "& > *": {
      "margin-top": "5%",
      padding: "5%",
      "text-align": "center",
    },
  },
  button: {
    "margin-top": "5%",
  },
  icon: {
    float: "left",
    "font-size": "3.5rem",
  },
  iconCenter: {
    display: "flex",
    "justify-content": "center",
  },
  indent: {
    marginTop: "3%",
  },
});

class Search extends Component {
  state = {
    trackTitle: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;
    const errors = {
      isError: false,
      trackTitleError: "",
    };

    if (this.state.trackTitle.length < 3) {
      isError = true;
      errors.isError = true;
      errors.trackTitleError =
        "Song title needs to be at least 3 characters long";
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  findTrack = (e) => {
    e.preventDefault();

    const err = this.validate();

    if (!err) {
      this.props.searchTrackList(this.state.trackTitle, this.props.history);
    }
  };

  render() {
    const { classes } = this.props;

    if (this.props.location.pathname === "/musixmatch") {
      return (
        <Grid item xs={12} className={classes.root}>
          <Paper elevation={10}>
            <div className={classes.iconCenter}>
              <Typography variant="h3" component="span">
                <MusicNoteIcon className={classes.icon} /> Search{" "}
                <Hidden only="xs">For A Song</Hidden>
              </Typography>
            </div>

            <Typography variant="subtitle1">
              Get the lyrics for any song
            </Typography>
            <form noValidate autoComplete="off" onSubmit={this.findTrack}>
              <TextField
                type="text"
                label="Song title..."
                variant="outlined"
                fullWidth
                name="trackTitle"
                onChange={this.onChange}
                value={this.state.trackTitle}
                error={this.state.isError}
                helperText={this.state.trackTitleError}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}
                type="submit"
              >
                Get Track Lyrics
              </Button>
            </form>
          </Paper>
        </Grid>
      );
    } else {
      return (
        <Fragment>
          <form
            noValidate
            autoComplete="off"
            onSubmit={this.findTrack}
            className={classes.indent}
          >
            <TextField
              size="small"
              type="text"
              label="Song title..."
              variant="outlined"
              fullWidth
              name="trackTitle"
              onChange={this.onChange}
              value={this.state.trackTitle}
              error={this.state.isError}
              helperText={this.state.trackTitleError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.iconButton2}
                      type="submit"
                      aria-label="search"
                      size="small"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Fragment>
      );
    }
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  searchTrackList: PropTypes.func.isRequired,
};

export default connect(null, { searchTrackList })(
  withRouter(withStyles(useStyles)(Search))
);
