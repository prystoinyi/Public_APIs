import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// MUI stuff
import {
  Paper,
  Typography,
  Grid,
  Hidden,
  IconButton,
  withStyles,
  InputBase,
} from "@material-ui/core";
// Icons
import PanoramaIcon from "@material-ui/icons/Panorama";
import SearchIcon from "@material-ui/icons/Search";
// Redux stuff
import { searchImageList } from "../../actions/pixabayActions";
import { connect } from "react-redux";

const useStyles = (theme) => ({
  root: {
    position: "fixed",
    minHeight: "100vh",
    "& > *": {
      position: "absolute",
      top: "45%",
      transform: "translate(-50%, -50%)",
      "text-align": "center",
    },
  },
  title: {
    width: "70vw",
    color: "white",
  },
  icon: {
    verticalAlign: "bottom",
    "font-size": "3.5rem",
  },
  iconCenter: {
    display: "flex",
    "justify-content": "center",
  },
  description: {
    color: "white",
    margin: "30px 0px 20px 0px",
  },
  rootInput: {
    padding: "2px 4px",
    display: "flex",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

class Search extends Component {
  state = {
    imageTitle: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = (e) => {
    e.preventDefault();

    this.props.searchImageList(this.state.imageTitle, this.props.history);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} className={classes.root}>
        <div>
          <div className={classes.iconCenter}>
            <Typography variant="h3" component="span" className={classes.title}>
              <PanoramaIcon className={classes.icon} /> Search{" "}
              <Hidden only="xs">For A Images</Hidden>
            </Typography>
          </div>
          <Typography variant="subtitle1" className={classes.description}>
            Over 1.8 million+ high quality stock images
          </Typography>
          <form noValidate autoComplete="off" onSubmit={this.findTrack}>
            <Paper className={classes.rootInput}>
              <InputBase
                type="text"
                className={classes.input}
                placeholder="Image title..."
                name="imageTitle"
                onChange={this.onChange}
                value={this.state.imageTitle}
              />
              <IconButton type="submit" className={classes.iconButton}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </form>
        </div>
      </Grid>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  searchImageList: PropTypes.func.isRequired,
};

export default connect(null, { searchImageList })(
  withStyles(useStyles)(withRouter(Search))
);
