import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: '#5c6bc0',
      // main: "#434343",
    },
    background: {
      // default: '#bdbdbd',
      default: "#c7c7c7",
      paper: "#9e9e9e",
    },
  },
  typography: {
    fontFamily: "Bruno Ace",
  },
};

export const theme = createTheme(themeOptions);
