import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#5F6569",
    },
    secondary: {
      main: "#BAC6D8",
      light: "#F5F8FD",
    },
    info: {
      main: "#F6F8FA",
      light: "#484F53",
    },
    success: {
      main: "#4caf50",
      light: "#1A2328",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#0088DA",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Oswald,sans-serif",
    },
    h5: { fontSize: "15px", lineHeight: "19px", fontWeight: 400 },
    h6: {
      fontSize: "15px",
      lineHeight: "19px",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "14px",
      color: "#484F53",
      lineHeight: "18px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "14px",
      color: "#484F53",
      lineHeight: "18.2px",
      fontWeight: 500,
    },
  },
});
