import React, { Component, Fragment } from "react";
import TwoColumnsList from "./TwoColumnsList";
import OneColumnList from "./OneColumnList";
import PropTypes from "prop-types";
import clsx from "clsx";
import FilterMenu from "./FilterMenu";
// MUI stuff
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  List,
  CircularProgress,
} from "@material-ui/core";
// Icons
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
// Redux stuff
import { connect } from "react-redux";

const styles = {
  heading: {
    textAlign: "center",
  },
  headingHide: {
    display: "none",
  },
  background: {
    backgroundColor: "red",
  },
  backgroundVisible: {
    backgroundColor: "blue",
  },
};

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Grid container>{children}</Grid>}</div>;
}

const StylesTabs = withStyles({
  root: {
    minHeight: "30px",
    display: "block",
  },
  fixed: {
    float: "right",
    width: "76px",
  },
  indicator: {
    width: 0,
    height: 0,
  },
})(Tabs);

const StylesTab = withStyles({
  root: {
    minWidth: "30px",
    minHeight: "30px",
    padding: "0px 5px",
  },
  selected: {
    backgroundColor: "#d6d6d6",
    borderRadius: "25%",
  },
})(Tab);

class Filter extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const {
      classes,
      musixmatch: {
        track_list,
        filter: { size, chartName },
        loading,
      },
    } = this.props;
    const { value } = this.state;

    let chart;
    if (chartName === "top") {
      chart = chartName;
    } else if (chartName === "hot") {
      chart = chartName;
    } else if (chartName === "mxmweekly") {
      chart = "weekly";
    } else if (chartName === "mxmweekly_new") {
      chart = "weekly(new)";
    }

    return (
      <Fragment>
        <div>
          <div>
            <StylesTabs
              value={value}
              onChange={this.handleChange}
              textColor="primary"
              aria-label="icon tabs"
            >
              <StylesTab
                icon={<ViewModuleIcon style={{ transform: "rotate(90deg)" }} />}
                aria-label="ViewStreamIcon"
              />

              <StylesTab
                icon={<ViewHeadlineIcon />}
                aria-label="ViewHeadlineIcon"
              />
            </StylesTabs>
          </div>
          <hr />
          <FilterMenu />
          <Typography
            variant="h3"
            className={clsx(classes.heading, {
              [classes.headingHide]: loading,
            })}
          >
            {chart[0].toUpperCase() + chart.slice(1)} {size} Tracks
          </Typography>
        </div>
        <TabPanel value={value} index={0}>
          {!loading ? (
            track_list.map((item, index) => (
              <TwoColumnsList
                key={item.track.track_id}
                track={item.track}
                numeric={index + 1}
              />
            ))
          ) : (
            <CircularProgress
              size={60}
              thickness={3}
              style={{ margin: "auto" }}
            />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item xs={12}>
            <List
              component="nav"
              aria-label="list"
              style={{ textAlign: "center" }}
            >
              {!loading ? (
                track_list.map((item, index) => (
                  <OneColumnList
                    key={item.track.track_id}
                    track={item.track}
                    numeric={index + 1}
                  />
                ))
              ) : (
                <CircularProgress size={60} thickness={3} />
              )}
            </List>
          </Grid>
        </TabPanel>
      </Fragment>
    );
  }
}

Filter.propTypes = {
  musixmatch: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  musixmatch: state.musixmatch,
});

export default connect(mapStateToProps)(withStyles(styles)(Filter));
