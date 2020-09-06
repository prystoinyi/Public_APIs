import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
// MUI stuff
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  withStyles,
} from "@material-ui/core";
// Icons
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AlbumIcon from "@material-ui/icons/Album";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const styles = {
  root: {
    padding: "15px",
  },
  wrap: {
    float: "left",
  },
};

class TwoColumnsList extends Component {
  render() {
    const { classes, track, numeric } = this.props;

    return (
      <Grid item xs={12} sm={6} className={classes.root}>
        <Paper elevation={10}>
          <List>
            <ListItem>
              <Typography variant="h6">
                <strong>
                  {numeric}. {track.artist_name}
                </strong>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>
                  <PlayCircleOutlineIcon className={classes.wrap} />
                  Track:{" "}
                </strong>
                {track.track_name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>
                  <AlbumIcon className={classes.wrap} />
                  Album:{" "}
                </strong>
                {track.album_name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to={{
                  pathname: `lyrics/track/${track.track_id}`,
                  state: { prevPath: this.props.location.pathname },
                }}
              >
                <NavigateNextIcon />
                View Lyrics
              </Button>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    );
  }
}

TwoColumnsList.propTypes = {
  classes: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
  numeric: PropTypes.number.isRequired,
};

export default withRouter(withStyles(styles)(TwoColumnsList));
