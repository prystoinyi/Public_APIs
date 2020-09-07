import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import {
  Divider,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Hidden,
  Tooltip,
} from "@material-ui/core";
// Icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AlbumIcon from "@material-ui/icons/Album";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

class OneColumnList extends Component {
  render() {
    const { track, numeric } = this.props;
    return (
      <>
        <ListItem>
          <ListItemText style={{ width: "30%" }}>
            <Tooltip title={track.artist_name} placement="bottom-start">
              <Typography variant="h6">
                <strong>
                  {numeric}.{" "}
                  {track.artist_name.indexOf("feat") !== -1
                    ? track.artist_name.slice(
                        0,
                        track.artist_name.indexOf("feat")
                      )
                    : track.artist_name}
                </strong>
              </Typography>
            </Tooltip>
          </ListItemText>
          <ListItemText style={{ width: "40%" }}>
            <Tooltip title={track.track_name} placement="bottom-start">
              <span style={{ display: "flex" }}>
                <strong style={{ display: "flex" }}>
                  <PlayArrowIcon />
                  Track:&nbsp;
                </strong>
                {track.track_name.indexOf("(") !== -1
                  ? track.track_name.slice(0, track.track_name.indexOf("("))
                  : track.track_name}
              </span>
            </Tooltip>
          </ListItemText>
          <Hidden only="xs">
            <ListItemText style={{ width: "28%" }}>
              <Tooltip title={track.album_name} placement="bottom-start">
                <span style={{ display: "flex" }}>
                  <strong style={{ display: "flex" }}>
                    <AlbumIcon />
                    Album:&nbsp;
                  </strong>
                  {track.album_name.indexOf("(") !== -1
                    ? track.album_name.slice(0, track.album_name.indexOf("("))
                    : track.album_name}
                </span>
              </Tooltip>
            </ListItemText>
          </Hidden>
          <IconButton
            style={{ color: "#ff3d00" }}
            component={Link}
            to={{
              pathname: `/lyrics/track/${track.track_id}`,
              state: { prevPath: this.props.location.pathname },
            }}
          >
            <UnfoldMoreIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </>
    );
  }
}

OneColumnList.propTypes = {
  track: PropTypes.object.isRequired,
  numeric: PropTypes.number.isRequired,
};

export default withRouter(OneColumnList);
