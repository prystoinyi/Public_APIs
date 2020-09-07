import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css'
// MUI stuff
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
// Components
import NavBar from "./components/layouts/NavBar";
import Home from "./components/layouts/Home";
import Error from "./components/layouts/Error";
import Musixmatch from "./components/musixmatch/Home";
import Pixabay from "./components/pixabay/Home";
import Lyrics from "./components/musixmatch/Lyrics";
import Search from "./components/musixmatch/SearchPage";
// Redux stuff
import { Provider } from "react-redux";
import store from "./util/store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: "36px",
        color: "black",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          color: "#ff3d00",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <React.Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/musixmatch" component={Musixmatch} />
              <Route exact path="/musixmatch/search" component={Search} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/pixabay" component={Pixabay} />
              <Route component={Error} />
            </Switch>
        </React.Fragment>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
