import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import Filter from "./Filter";
import ScrollArrow from "../layouts/ScrollArrow";
// MUI stuff
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// Redux stuff
import { connect } from "react-redux";
import { getTrackList } from "../../actions/musixmatchActions";

const useStyles = (theme) => ({
  root: {
    width: "85%",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
  },
});

class Home extends Component {
  componentDidMount() {
    this.props.getTrackList(this.props.musixmatch.filter);
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container className={classes.root}>
          <Search />
          <Grid item xs={12}>
            <Filter />
          </Grid>
          <ScrollArrow />
        </Grid>
      </Fragment>
    );
  }
}

Home.propTypes = {
  getTrackList: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  musixmatch: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  musixmatch: state.musixmatch,
});

export default connect(mapStateToProps, { getTrackList })(
  withStyles(useStyles)(Home)
);
