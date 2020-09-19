import React, { Component } from "react";
import PropTypes from "prop-types";
// MUI stuff
import { GridList, GridListTile, withStyles } from "@material-ui/core";
// Redux stuff
import { connect } from "react-redux";
import { getImageList } from "../../actions/pixabayActions";

const useStyles = (theme) => ({
  
});

export class SearchPage extends Component {
  render() {
    const {
      classes,
      pixabay: { imageList },
    } = this.props;

    return <div></div>;
  }
}

SearchPage.propTypes = {
  pixabay: PropTypes.object.isRequired,
  getImageList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pixabay: state.pixabay,
});

export default connect(mapStateToProps, { getImageList })(
  withStyles(useStyles)(SearchPage)
);
