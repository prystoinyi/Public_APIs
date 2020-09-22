import React from "react";
import PixabayLogo from "../../images/pixabay.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  positionPixabayLogo: {
    position: "fixed",
    bottom: "2%",
    right: "2%",
  },
  imgLogo: {
    height: "65px",
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.positionPixabayLogo}>
      <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
        <img src={PixabayLogo} alt="Pixabay Logo" className={classes.imgLogo} />
      </a>
    </div>
  );
};

export default Logo;
