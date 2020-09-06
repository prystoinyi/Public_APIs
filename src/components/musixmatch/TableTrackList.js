import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// MUI stuff
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  withStyles,
  TablePagination,
  CircularProgress,
} from "@material-ui/core";
// Icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AlbumIcon from "@material-ui/icons/Album";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
// Redux stuff
import { connect } from "react-redux";

const StylesTableCell = withStyles({
  root: {
    padding: "10px",
  },
})(TableCell);

class TableTrackList extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      rowsPerPage: 10,
      tracks: [],
    };
  }

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: +event.target.value,
      page: 0,
    });
  };

  render() {
    const {
      trackList,
      musixmatch: { loading },
    } = this.props;
    const { page, rowsPerPage } = this.state;

    if (trackList.length > 0) {
      return (
        <Fragment>
          {!loading ? (
            <Paper style={{ marginTop: "3%", marginBottom: "3%" }}>
              <TableContainer style={{ maxHeight: "60vh" }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Artist</strong>
                      </TableCell>
                      <TableCell>
                        <strong style={{ display: "flex" }}>
                          <PlayArrowIcon />
                          Track
                        </strong>
                      </TableCell>
                      <TableCell>
                        <strong style={{ display: "flex" }}>
                          <AlbumIcon />
                          Album
                        </strong>
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {trackList
                      .map((item, index) => {
                        item.track.number = index + 1;
                        return { track: item.track };
                      })
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((track) => {
                        return (
                          <TableRow hover key={track.track.track_id}>
                            <StylesTableCell>
                              {track.track.number}
                              {". "}
                              {track.track.artist_name}
                            </StylesTableCell>
                            <StylesTableCell>
                              {track.track.track_name}
                            </StylesTableCell>
                            <StylesTableCell>
                              {track.track.album_name}
                            </StylesTableCell>
                            <TableCell style={{ padding: "4px" }}>
                              <IconButton
                                style={{ color: "#ff3d00", padding: "5px" }}
                                component={Link}
                                to={{
                                  pathname: `/lyrics/track/${track.track.track_id}`,
                                  state: {
                                    prevPath: this.props.location.pathname,
                                  },
                                }}
                              >
                                <UnfoldMoreIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={trackList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </Paper>
          ) : (
            <CircularProgress
              size={60}
              thickness={3}
              style={{ margin: "10% auto 10% auto", display: "block" }}
            />
          )}
        </Fragment>
      );
    } else {
      return <div></div>;
    }
  }
}

TableTrackList.propTypes = {
  trackList: PropTypes.array.isRequired,
  musixmatch: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  musixmatch: state.musixmatch,
});

export default connect(mapStateToProps)(withRouter(TableTrackList));
