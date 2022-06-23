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
import NavItems from "../../molecules/NavItems";
import ExploreDropDown from "../ExploreDropDown";
import { Backdrop, CssBaseline } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

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
  logo: {
    width: "124.09px",
    height: "26px",
  },

  AppBar: {
    padding: "0px !important ",
    border: "none",
    position: "static",
  },

  ToolBar: {
    padding: "0px !important",
  },
}));



const NavBar = (props: NavBarProp) => {
  const classes = useStyles();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

 
    const navigate = useNavigate()
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

  return (
    <React.Fragment>
      <Backdrop open={!backDrop} sx={{ zIndex: "1000" }} />

      <AppBar className={classes.AppBar} elevation={0}>
        <CssBaseline />
        <Container maxWidth="xl">
          <CssBaseline />
          <Toolbar disableGutters className={classes.ToolBar}>
            <CssBaseline />
            <Box
              component="img"
              src={logo}
              sx={{ display: "flex", mr: 1, ml: 1 }}
              className={classes.logo}
            ></Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  my: 2,
                  color: "#03314B",
                  display: "block",
                  fontSize: "16px",
                }}
              >
                <SearchIcon />
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
              <Toolbar>
                <Box>
                  <NavItems
                    children={
                      <IconButton
                        id="menu-account"
                        disableRipple={true}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={{ p: 0 }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    }
                  />
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
                      sx={{ margin: "2% 0% 0% 65%" }}
                    >
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={()=>{logout(); handleClose();}}>Log Out</MenuItem>
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
                      <MenuItem onClick={handleClose}>Documentations</MenuItem>
                      <MenuItem
                        onClick={() => {loginWithRedirect();handleClose();}}
                      >
                        Log In
                      </MenuItem>
                    </Menu>
                  )}
                </Box>
              </Toolbar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
