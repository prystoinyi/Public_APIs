import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Home from "./components/layouts/Home";
import Error from "./components/layouts/Error";
import Musixmatch from './components/musixmatch/Home'
import Pixabay from './components/pixabay/Home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/musixmatch" component={Musixmatch} />
          <Route exact path="/pixabay" component={Pixabay} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
