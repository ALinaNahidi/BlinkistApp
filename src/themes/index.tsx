import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  shape: {
    borderRadius: "1px solid #E1ECFC",
  },
  palette: {
    primary: {
      main: "#2CE080",
    },
    secondary: {
      main: "#3A4649",
    },
    text: {
      primary: "#03314B ",
      secondary: "#6D787E ",
    },
    background: {
      default: "#FFFFF",
    },
  },
  typography: {
    subtitle1: {
      margin: "2%",
      fontFamily: "Cera pro",
      FontStyle: "normal",
      fontWeight: "700",
      FontSize: "21px",
      LineHeight: "23px",
    },

    body1: {
      margin: "2%",
      fontFamily: "Cera pro",
      FontStyle: "normal",
      fontWeight:"400",
      LineHeight: "23px",
    },
  },
  spacing: 4,

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: "0.5% 2.5%",
          padding: "0 12px",
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: "0",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          margin: " 0% 15%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          padding: "0px 0px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          alignItems: "self-start",
          justifyContent: "flex-start",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#0365F2",
          
        },
      },
    },
  },
});

baseTheme.spacing(4);

export default baseTheme;
