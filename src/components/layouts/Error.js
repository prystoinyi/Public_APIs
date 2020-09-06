import React from "react";
import { Link } from "react-router-dom";
// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    "-webkit-transform": "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    "letter-spacing": "3px",
  },
  textDecoration: {
    letterSpacing: "5px",
    'text-transform': 'capitalize'
  },
  divider: {
    width: "16rem",
    height: "4px",
    margin: "1.7rem auto",
    'background-color': 'rgba(0, 0, 0, 0.8)'
  },
}));

export default function Error() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.textDecoration}>
        404
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h2" className={classes.textDecoration}>
        page not found
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/"
      >
        Return Home
      </Button>
    </Container>
  );
}
