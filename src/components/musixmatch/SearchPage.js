import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Search from "./Search";
import TableTrackList from "./TableTrackList";
// MUI stuff
import { withStyles, Button } from "@material-ui/core";
// Redux stuff
import { connect } from "react-redux";

const useStyles = (theme) => ({
  container: {
    width: "85%",
    margin: "auto",
  },
  indent: {
    marginTop: "3%",
  },
});

class SearchPage extends Component {
  render() {
    const {
      classes,
      musixmatch: { searchTrack_list },
    } = this.props;

    return (
      <div className={classes.container}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/musixmatch"
          className={classes.indent}
        >
          Go Back
        </Button>
        <Search />
        <TableTrackList trackList={searchTrack_list} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
  musixmatch: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  musixmatch: state.musixmatch,
});

export default connect(mapStateToProps)(withStyles(useStyles)(SearchPage));
