import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "./layouts/Desktop";
import { compose } from "recompose";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createGenerateClassName } from "react-jss";
import JssProvider from "react-jss/lib/JssProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009688",
      light: "#52c7b8",
      dark: "#00675b"
    },
    secondary: {
      main: "#F57C00",
      light: "#ffbf45",
      dark: "#c55f00"
    },
    error: {
      main: "#b5000b"
    },
    header: {
      main: "#212121"
    }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

function App() {
  const generateClassName = createGenerateClassName();
  return (
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Route component={Desktop} />
        </Router>
      </MuiThemeProvider>
    </JssProvider>
  );
}

const enhance = compose();

export default enhance(App);
