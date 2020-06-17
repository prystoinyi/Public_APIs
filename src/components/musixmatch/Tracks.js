import React from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AlbumIcon from "@material-ui/icons/Album";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
  wrap: {
    float: "left",
  },
}));

function Tracks(props) {
  const { track } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Paper elevation={10} className={classes.paper}>
        <List>
          <ListItem>
            <Typography variant="h6">
              <strong>{track.artist_name}</strong>
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
              to={`lyrics/track/${track.track_id}`}
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

export default Tracks;
