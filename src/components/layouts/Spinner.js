import React from "react";
// MUI stuff
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  centerSpinner: {
    textAlign: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    "-webkit-transform": "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.centerSpinner}>
      <CircularProgress size={70} />
    </div>
  );
};
