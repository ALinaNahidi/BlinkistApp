import * as React from "react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import {Box, Container, CssBaseline, Grid, Link, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MedicationLiquidOutlinedIcon from "@mui/icons-material/MedicationLiquidOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import OutsideClickHandler from "react-outside-click-handler";
import { Anchor } from "@mui/icons-material";
import { link } from "fs";

interface ExploreDropDownProps{
  onExplore:(arg:boolean)=>void;
}
const useStyles: any = makeStyles((theme: Theme) => ({
  ListItem: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    "&.hover": {
      color: "blue",
    },
  },

  Grid: {
    flexGrow: "1",
  },
  link: {
    textDecoration: "none !important",
    textUnderlineOffset: "5px",
    "&:hover": {
      textDecoration: "underline red",
    },
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
}));

const ExploreDropDown = (props: ExploreDropDownProps) => {
  const [icon, setIcon] = React.useState(false);

  const handleIcon= () =>{
    setIcon(!icon);
  }

  const classes = useStyles();
  return (
    <Box maxWidth={"100%"}>
      <CssBaseline />
      <OutsideClickHandler
        onOutsideClick={() => {
          setIcon(false);
          props.onExplore(true);
        }}
      >
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <CssBaseline />
              <Box {...bindTrigger(popupState)}>
                <div className={classes.link}>
                  <Box
                    component={Link}
                    color={"#03314B"}
                    
                    onClick={() => {
                      handleIcon();
                      props.onExplore(icon);
                    }}
                  >
                    <Typography variant="body1">Explore</Typography>
                  </Box>

                  {icon ? (
                    <ExpandLessIcon
                      color={"secondary"}
                      onClick={() => {
                        handleIcon();
                        props.onExplore(icon);
                      }}
                    />
                  ) : (
                    <ExpandMoreIcon
                      color={"secondary"}
                      onClick={() => {
                        handleIcon();
                        props.onExplore(icon);
                      }}
                    />
                  )}
                </div>
              </Box>
              <Popover
                {...bindPopover(popupState)}
                PaperProps={{
                  style: {
                    width: "100%",
                    marginTop: "10px",
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  py={{ xs: 3, sm: 5 }}
                  px={{ xs: 0, sm: 0 }}
                  bgcolor="#F1F6F4"
                  color="#03314B"
                >
                  <Container maxWidth="lg" sx={{ marginLeft: "15%" }}>
                    <Grid container spacing={5} className={classes.Grid}>
                      <Grid item xs={12} sm={4}>
                        <Box sx={{ height: "24px" }}>Explore by category</Box>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Box sx={{ height: "24px" }}>
                          See recently added titles
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Box sx={{ height: "24px" }}>See popular titles</Box>
                      </Grid>
                    </Grid>
                    <hr className={classes.Grid} />
                  </Container>
                  <Container maxWidth="lg" sx={{ marginLeft: "15%" }}>
                    <Grid container spacing={5} className={classes.Grid}>
                      <Grid item xs={12} sm={4}>
                        <Box className={classes.ListItem}>
                          <NotificationsNoneOutlinedIcon />
                          <Typography color="inherit">Book Lists</Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <ScienceOutlinedIcon />
                          <Typography color="inherit">
                            Waht is Nonfiction?
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <PublicOutlinedIcon />
                          <Typography color="inherit">
                            What to read next?
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <BusinessCenterOutlinedIcon />
                          <Typography color="inherit">
                            Benefits of reading
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <PsychologyOutlinedIcon />
                          <Typography color="inherit">Pricing</Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <EnergySavingsLeafOutlinedIcon />
                          <Typography color="inherit">
                            BTypographyist business
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Box className={classes.ListItem}>
                          <AccountBalanceOutlinedIcon />
                          <Typography color="inherit">Gift cards</Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <MedicationLiquidOutlinedIcon />
                          <Typography color="inherit">
                            BTypographyist magaine
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <HistoryEduOutlinedIcon />
                          <Typography color="inherit">
                            Contact & help
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <TipsAndUpdatesOutlinedIcon />
                          <Typography color="inherit">About</Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <HourglassBottomOutlinedIcon />
                          <Typography color="inherit">Careers</Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <ModeStandbyOutlinedIcon />
                          <Typography color="inherit">Partners</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Box className={classes.ListItem}>
                          <TimelineOutlinedIcon />
                          <Typography color="inherit">
                            Code of Conduct
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <EqualizerOutlinedIcon />
                          <Typography color="inherit">
                            Code of Conduct
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <ChatBubbleOutlineOutlinedIcon />
                          <Typography color="inherit">
                            Code of Conduct
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <CurrencyRupeeOutlinedIcon />
                          <Typography color="inherit">
                            Code of Conduct
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <VolunteerActivismOutlinedIcon />
                          <Typography color="inherit">
                            Code of Conduct
                          </Typography>
                        </Box>
                        <Box className={classes.ListItem}>
                          <WorkspacePremiumOutlinedIcon />
                          <Typography color="inherit">
                            Code of Conduct
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </OutsideClickHandler>
    </Box>
  );
}

export default ExploreDropDown;