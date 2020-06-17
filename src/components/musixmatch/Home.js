import React, { Component } from "react";
import axios from "axios";
import { Grid, Backdrop } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Tracks from "./Tracks";
import Spinner from "../layouts/Spinner";
import Search from "./Search";

const useStyles = (theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
});

class Home extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }

  updateState = (e) => {
    this.setState({
      track_list: e,
    });
  }

  render() {
    const { classes } = this.props;
    const { track_list } = this.state;

    console.log(this.state)

    if (track_list === undefined || Object.keys(track_list).length === 0) {
      return (
        <Backdrop open={true}>
          <Spinner />
        </Backdrop>
      );
    } else {
      return (
        <>
          <Grid container className={classes.root}>
            <Search track_list={track_list} updateState={this.updateState} />
            {this.state.track_list.map((item) => (
              <Tracks key={item.track.track_id} track={item.track} />
            ))}
          </Grid>
        </>
      );
    }
  }
}

export default withStyles(useStyles)(Home);
