import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#5c6bc0',
    },
    background: {
      default: '#bdbdbd',
      paper: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: 'Bruno Ace',
  },
};

export const theme=createTheme(themeOptions);