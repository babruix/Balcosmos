import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./components/Home";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DrawerAppBar />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
