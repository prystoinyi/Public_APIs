import React, { Component } from "react";
import PropTypes from "prop-types";
// MUI stuff
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Drawer,
} from "@material-ui/core";
// Icons
import FilterListIcon from "@material-ui/icons/FilterList";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// Redux stuff
import { connect } from "react-redux";
import { changeFilter } from "../../actions/musixmatchActions";

export class FilterMenu extends Component {
  state = {
    openSize: true,
    openChartName: true,
    openCountry: true,
    selectedIndexSize: Number(this.props.musixmatch.filter.size),
    selectedIndexChartName: this.props.musixmatch.filter.chartName,
    selectedIndexCountry: this.props.musixmatch.filter.country,
    openDrawer: false,
  };

  handleClickExpand = (anchor) => () => {
    this.setState({
      [anchor]: !this.state[anchor],
    });
  };

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({
      openDrawer: open,
    });
  };

  handleListItemClick = (anchor, index, object) => () => {
    this.setState({
      [anchor]: index,
    });

    this.props.changeFilter(object);
  };

  render() {
    const {
      openSize,
      openChartName,
      openCountry,
      openDrawer,
      selectedIndexSize,
      selectedIndexChartName,
      selectedIndexCountry,
    } = this.state;

    return (
      <div style={{ float: "right" }}>
        <IconButton color="primary" onClick={this.toggleDrawer(true)}>
          <FilterListIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={this.toggleDrawer(false)}
        >
          <List component="nav" style={{ width: "250px" }}>
            <ListItem button onClick={this.handleClickExpand("openSize")}>
              <ListItemText primary="Page Size" />
              {openSize ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSize} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexSize === 10}
                  onClick={this.handleListItemClick("selectedIndexSize", 10, {
                    size: 10,
                  })}
                >
                  <ListItemText primary="10" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexSize === 20}
                  onClick={this.handleListItemClick("selectedIndexSize", 20, {
                    size: 20,
                  })}
                >
                  <ListItemText primary="20" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexSize === 50}
                  onClick={this.handleListItemClick("selectedIndexSize", 50, {
                    size: 50,
                  })}
                >
                  <ListItemText primary="50" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexSize === 100}
                  onClick={this.handleListItemClick("selectedIndexSize", 100, {
                    size: 100,
                  })}
                >
                  <ListItemText primary="100" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClickExpand("openChartName")}>
              <ListItemText primary="Chart Name" />
              {openChartName ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openChartName} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexChartName === "top"}
                  onClick={this.handleListItemClick(
                    "selectedIndexChartName",
                    "top",
                    { chartName: "top" }
                  )}
                >
                  <ListItemText primary="Top" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexChartName === "hot"}
                  onClick={this.handleListItemClick(
                    "selectedIndexChartName",
                    "hot",
                    { chartName: "hot" }
                  )}
                >
                  <ListItemText primary="Hot" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexChartName === "mxmweekly"}
                  onClick={this.handleListItemClick(
                    "selectedIndexChartName",
                    "weekly",
                    { chartName: "mxmweekly" }
                  )}
                >
                  <ListItemText primary="Weekly" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexChartName === "mxmweekly_new"}
                  onClick={this.handleListItemClick(
                    "selectedIndexChartName",
                    "weekly(new)",
                    { chartName: "mxmweekly_new" }
                  )}
                >
                  <ListItemText primary="Weekly(new)" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClickExpand("openCountry")}>
              <ListItemText primary="Country" />
              {openCountry ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCountry} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexCountry === "ru"}
                  onClick={this.handleListItemClick(
                    "selectedIndexCountry",
                    "ru",
                    { country: "ru" }
                  )}
                >
                  <ListItemText primary="RU" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexCountry === "us"}
                  onClick={this.handleListItemClick(
                    "selectedIndexCountry",
                    "us",
                    { country: "us" }
                  )}
                >
                  <ListItemText primary="US" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexCountry === "uk"}
                  onClick={this.handleListItemClick(
                    "selectedIndexCountry",
                    "uk",
                    { country: "uk" }
                  )}
                >
                  <ListItemText primary="UK" />
                </ListItem>
                <ListItem
                  button
                  style={{ paddingLeft: "30px" }}
                  selected={selectedIndexCountry === "de"}
                  onClick={this.handleListItemClick(
                    "selectedIndexCountry",
                    "de",
                    { country: "de" }
                  )}
                >
                  <ListItemText primary="DE" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </div>
    );
  }
}

FilterMenu.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  musixmatch: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  musixmatch: state.musixmatch,
});

export default connect(mapStateToProps, { changeFilter })(FilterMenu);
