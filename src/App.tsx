import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import DrawerAppBar from "./components/DrawerAppBar";
import About from "./components/About";
import Albums from "./components/Albums";
import Grid from "@mui/material/Grid";
import Listen from "./components/Listen";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#388e3c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DrawerAppBar />
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
      >
        <Albums />
        <About />
        <Listen />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
