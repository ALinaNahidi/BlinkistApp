import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/Images/Logo.png";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import TypographyComponent from "../../atoms/Typography";
import OutsideClickHandler from "react-outside-click-handler";
import ExploreDropDown from "../ExploreDropDown";
import { Backdrop, CssBaseline } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SearchImage from "../../../assets/Images/SearchImage.webp"
type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
};
interface NavBarProp {
  bookObject: Array<Book>;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#fff",
    width: "100%",
    padding: "0px  !important ",
    margin: "0px  !important ",
    border: "none",
    position: "fixed",
    marginLeft: "20%",
    height: "12%",
    marginBottom: "1.5%",
    zIndex: "100",
  },
  logo: {
    width: "124.09px",
    height: "26px",
  },

  AppBar: {
    padding: "0px  !important ",
    border: "none",
    position: "fixed",
    marginLeft: "20%",
    width: "58%",
    height: "12%",
    marginBottom: "1.5%",

    zIndex: "100",
  },

  ToolBar: {
    padding: "0 !important",
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  },
}));

const NavBar = (props: NavBarProp) => {
  const classes = useStyles();

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [backDrop, setBackDrop] = React.useState(true);

  const handleBackDrop = (iconVariable: boolean) => {
    setBackDrop(iconVariable);
    console.log(backDrop);
  };

   const [icon, setIcon] = React.useState(false);

   const handleIcon = () => {
     setIcon(!icon);
   };

  return (
    <React.Fragment>
      <Backdrop open={!backDrop} sx={{zIndex:100}} />
      <Box className={classes.root}>
        <Box className={classes.AppBar}>
          <CssBaseline />
          <Container maxWidth="xl">
            <CssBaseline />
            <Box className={classes.ToolBar}>
              <CssBaseline />
              <Box component="img" src={logo} className={classes.logo}></Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  disableRipple={true}
                  sx={{
                    my: 2,
                    color: "#03314B",
                    display: "flex",
                    fontSize: "16px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={SearchImage}
                    style={{ width: "20px", height: "20px" }}
                  />
                </Button>
                <Button
                  disableRipple={true}
                  sx={{
                    my: 2,
                    color: "#03314B",
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  <ExploreDropDown
                    onExplore={handleBackDrop}
                    bookObject={props.bookObject}
                  />
                </Button>
                <Button
                  disableRipple={true}
                  sx={{
                    my: 2,
                    color: "#03314B",
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  <TypographyComponent variant="body1" children="My Library" />
                </Button>
              </Box>

              <Box>
                <Box>
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setIcon(false);
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="body1" color={"secondary"}>
                        {isAuthenticated ? (
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/2.jpg"
                          />
                        ) : (
                          <TypographyComponent
                            variant="body1"
                            children="Account"
                          />
                        )}
                      </Typography>
                      {icon ? (
                        <Button
                          sx={{ padding: "0px", justifyContent: "left" }}
                          onClick={handleIcon}
                          disableRipple={true}
                        >
                          <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            id="menu-account"
                            sx={{ p: 0 }}
                          >
                            <ExpandLessIcon
                              color={"secondary"}
                              sx={{ alignSelf: "center" }}
                            />
                          </IconButton>
                        </Button>
                      ) : (
                        <Button
                          sx={{ padding: "0px", justifyContent: "left" }}
                          onClick={handleIcon}
                          disableRipple={true}
                        >
                          <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            id="menu-account"
                            sx={{ p: 0 }}
                          >
                            <ExpandMoreIcon
                              color={"secondary"}
                              sx={{ alignSelf: "center" }}
                            />
                          </IconButton>
                        </Button>
                      )}
                    </Box>
                    {isAuthenticated ? (
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "menu-account",
                        }}
                        sx={{ margin: "2% 0% 0% 70%" }}
                      >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem
                          onClick={() => {
                            logout();
                            handleClose();
                          }}
                        >
                          Log Out
                        </MenuItem>
                      </Menu>
                    ) : (
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ margin: "2.5% 0% 0% 65%" }}
                      >
                        <MenuItem onClick={handleClose}>
                          Documentations
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            loginWithRedirect();
                            handleClose();
                          }}
                        >
                          Log In
                        </MenuItem>
                      </Menu>
                    )}
                  </OutsideClickHandler>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default NavBar;
