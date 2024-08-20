import { ThemeOptions, createTheme } from "@mui/material";
const themeOptions: ThemeOptions = {
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "40px 0",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginBottom: 20,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
};
export const theme = createTheme(themeOptions);
