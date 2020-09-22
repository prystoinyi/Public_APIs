import React from "react";
import PropTypes from "prop-types";
import { setWidthImg } from "../../util/setWidthImg";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "100%",
    position: "sticky",
    margin: 0,
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)",
      "z-index": 2,
    },
  },
  imgCover: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
}));

const ImgGridList = (props) => {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList} cols={6}>
      {props.imageList
      .slice(0, setWidthImg(props.imageList)[0] + 1)
      .map((tile, index) => (
        <GridListTile
          key={tile.id}
          cols={1}
          style={{ width: setWidthImg(props.imageList)[index + 1] + "%" }}
        >
          <img
            src={tile.largeImageURL}
            alt={tile.user}
            className={classes.imgCover}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

ImgGridList.defaultProps = {
  imageList: PropTypes.object.isRequired,
};

export default ImgGridList;
