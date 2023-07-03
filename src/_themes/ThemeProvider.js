import {createTheme} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
      light: '#E8F5E9',
      darkHeading: '#7b7b7b',
    },
    secondary: {
      main: '#ffffff',
      darker: '#fafafa',
      caption: '#7d7d7d'
    },
    errorLighter: {
      main: '#FFEBEE'
    },
    lightBackground: {
      main: '#f1f1f1'
    }
  },
});
