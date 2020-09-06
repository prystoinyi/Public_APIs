import React, { useState } from "react";
import "../../App.css";
// MUI stuff
import { makeStyles, IconButton } from "@material-ui/core";
// Icons
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    position: "fixed",
    bottom: "30px",
    right: "20px",
    "&:hover": {
      color: "rgba(0, 0, 0, 0.8)",
    },
  },
}));

const ScrollArrow = () => {
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <IconButton
      className={classes.scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
      onClick={scrollTop}
    >
      <ArrowUpwardIcon fontSize="large" />
    </IconButton>
  );
};

export default ScrollArrow;
