import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, TextField, Button } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

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
});

class Search extends Component {
  state = {
    track_list: [],
    trackTitle: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = () => {
    if (this.state.trackTitle !== "") {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then((res) => {
          this.setState({
            track_list: res.data.message.body.track_list,
            trackTitle: "",
          });

          this.updateData();
        })
        .catch((err) => console.log(err));
    }
  };

  updateData = () => {
    return this.props.updateState(this.state.track_list);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} className={classes.root}>
        <Paper elevation={10}>
          <div className={classes.iconCenter}>
            <Typography variant="h3" component="span">
              <MusicNoteIcon className={classes.icon} /> Search For A Song
            </Typography>
          </div>

          <Typography variant="subtitle1">
            Get the lyrics for any song
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              type="text"
              label="Song title..."
              variant="outlined"
              fullWidth
              name="trackTitle"
              onChange={this.onChange}
              value={this.state.trackTitle}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={this.findTrack}
            >
              Get Track Lyrics
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Search);
