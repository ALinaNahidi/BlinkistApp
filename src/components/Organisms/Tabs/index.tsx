import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HomeComponent from "../../pages/home";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";

const useStyles = makeStyles((theme: Theme) => ({
  TabBox: {
    margin: "0% 15%",
    padding: "0 12px",
    borderBottom: "0",
    borderColor: "divider",
  },
  TabPanel: {
    margin: "0% 15%",
    padding: "0 12px",
  },
  Tab: {
    width: "25%",
  },
}));

export default function BlinkistTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <Box>
      <TabContext value={value}>
        <Box className={classes.TabBox}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs"
            sx={{ alignItems: "self-start", justifyContent: "flex-start" }}
          >
            <Tab label="Currently Reading" value="1" className={classes.Tab} />
            <Tab label="Finished" value="2" className={classes.Tab} />
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.TabPanel}>
          <HomeComponent type="myLibrary" />
        </TabPanel>
        <TabPanel value="2" className={classes.TabPanel}>
          <HomeComponent type="explore" />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
