import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import PixabayLogo from "../../images/pixabay.png";
// MUI stuff
import { withStyles, GridList, GridListTile } from "@material-ui/core";
// Redux stuff
import store from "../../util/store";
import { APPBAR_PIXABAY, APPBAR_PIXABAY_STOP } from "../../actions/actionTypes";
import { getImageList } from "../../actions/pixabayActions";
import { connect } from "react-redux";

const useStyles = (theme) => ({
  rootBackground: {
    display: "flex",
    justifyContent: "space-around",
  },
  gridList: {
    width: "100%",
    position: "sticky",
    margin: 0,
  },
  imgCover: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  positionPixabayLogo: {
    position: "fixed",
    bottom: "2%",
    right: "2%",
  },
  imgLogo: {
    height: "65px",
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

  setCols() {
    let widthImg = [];
    let sum = 0;
    let indexArr = 0;

    this.props.pixabay.imageList.map((item, index) => {
      let width = item.imageWidth / 250;

      sum += width;

      if (sum < 90) {
        widthImg.push(width);
      } else {
        let widthEnd = 100 - (sum - width);
        widthImg.push(+widthEnd.toFixed(3));
        sum = 0;
        indexArr = index;
      }
    });

    widthImg.unshift(indexArr);

    return widthImg;
  }

  render() {
    const {
      classes,
      pixabay: { imageList },
    } = this.props;

    return (
      <div className={classes.rootBackground}>
        <GridList className={classes.gridList} id="gridList" cols={6}>
          {imageList.slice(0, this.setCols()[0] + 1).map((tile, index) => (
            <GridListTile
              key={tile.id}
              cols={1}
              style={{ width: this.setCols()[index + 1] + "%" }}
            >
              <img
                src={tile.largeImageURL}
                alt={tile.user}
                className={classes.imgCover}
              />
            </GridListTile>
          ))}
        </GridList>
        <Search />
        <div className={classes.positionPixabayLogo}>
          <a
            href="https://pixabay.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PixabayLogo}
              alt="Pixabay Logo"
              className={classes.imgLogo}
            />
          </a>
        </div>
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
