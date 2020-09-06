import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
// MUI stuff
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Container,
  Divider,
  Button,
  Collapse,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Backdrop,
} from "@material-ui/core";
// Icons
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AlbumIcon from "@material-ui/icons/Album";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const useStyles = (theme) => ({
  container: {
    width: "90%",
    "& > *": {
      "margin-top": "5%",
    },
  },

  buttonRight: {
    "margin-left": "auto",
  },
});

class Lyrics extends Component {
  state = {
    open: false,
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch((err) => console.log(err));
  }

  handleClick = (e) => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { classes } = this.props;
    const { track, lyrics, open } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return (
        <Backdrop open>
          <Spinner />
        </Backdrop>
      );
    } else {
      return (
        <Container className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={
              this.props.location.state === undefined
                ? "/"
                : this.props.location.state.prevPath
            }
          >
            {this.props.location.state === undefined ? "Home" : "Go Back"}
          </Button>
          <Card raised>
            <CardHeader
              avatar={<QueueMusicIcon fontSize="large" />}
              title={track.track_name}
              subheader={track.artist_name}
              titleTypographyProps={{ variant: "h5" }}
              subheaderTypographyProps={{ variant: "h6" }}
            />
            <Divider />
            <CardContent>
              <Typography variant="body1">{lyrics.lyrics_body}</Typography>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={this.handleClick}
                className={classes.buttonRight}
              >
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </CardActions>
            <Divider />
            <Collapse in={open} timeout={900}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AlbumIcon />
                  </ListItemIcon>
                  <Typography>
                    <strong>Album ID: </strong>
                    {track.album_id}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <LibraryMusicIcon />
                  </ListItemIcon>
                  <Typography>
                    <strong>Song Genre: </strong>
                    {track.primary_genres.music_genre_list.length === 0
                      ? "Not entered"
                      : track.primary_genres.music_genre_list[0].music_genre
                          .music_genre_name}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <AlbumIcon />
                  </ListItemIcon>
                  <Typography>
                    <strong>Explicit Words: </strong>
                    {track.explicit === 0 ? "No" : "Yes"}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <AlbumIcon />
                  </ListItemIcon>
                  <Typography>
                    <strong>Updated time: </strong>
                    <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
                  </Typography>
                </ListItem>
              </List>
            </Collapse>
          </Card>
        </Container>
      );
    }
  }
}

Lyrics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Lyrics);
