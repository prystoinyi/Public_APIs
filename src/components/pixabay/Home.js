import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import { setWidthImg } from "../../util/setWidthImg";
// MUI stuff
import { withStyles, GridList, GridListTile } from "@material-ui/core";
// Redux stuff
import store from "../../util/store";
import { APPBAR_PIXABAY, APPBAR_PIXABAY_STOP } from "../../actions/actionTypes";
import { getImageList } from "../../actions/pixabayActions";
import { connect } from "react-redux";
import ImgGridList from "./ImgGridList";
import Logo from "./Logo";

const useStyles = (theme) => ({
  rootBackground: {
    display: "flex",
    justifyContent: "space-around",
  },
});

class Home extends Component {
  componentDidMount() {
    store.dispatch({ type: APPBAR_PIXABAY });
    this.props.getImageList();
  }

  componentWillUnmount() {
    store.dispatch({ type: APPBAR_PIXABAY_STOP });
  }

  render() {
    const {
      classes,
      pixabay: { imageList },
    } = this.props;

    return (
      <div className={classes.rootBackground}>
        <ImgGridList imageList={imageList} />
        <Search />
        <Logo />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  pixabay: PropTypes.object.isRequired,
  getImageList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pixabay: state.pixabay,
});

export default connect(mapStateToProps, { getImageList })(
  withStyles(useStyles)(Home)
);
