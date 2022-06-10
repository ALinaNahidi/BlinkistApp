import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HomeComponent from "../TabsandCardState/home";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import { getBooks } from "../../../Data/data";
type Book = {
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
    paddingLeft:"0px !important",
    
  },
}));

export default function BlinkistTabs() {
  const [bookObject, setBookObject] = React.useState(getBooks());

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const classes = useStyles();

  const handleFinishedClick = (book: Book) => {
    console.log("from home");
    const bookObjectTemp = [...bookObject];
    const index = bookObjectTemp.indexOf(book);
    bookObjectTemp[index] = { ...book };

    {
      bookObjectTemp[index].status === "reading"
        ? (bookObjectTemp[index].status = "finished")
        : (bookObjectTemp[index].status = "reading");
    }

    setBookObject([...bookObjectTemp]);
    console.log(bookObject);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box className={classes.TabBox}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs"
            sx={{ alignItems: "self-start", justifyContent: "flex-start" }}
          >
            <Tab
              disableRipple
              label="Currently Reading"
              value="1"
              className={classes.Tab}
            />
            <Tab
              disableRipple label="Finished"
              value="2"
              className={classes.Tab}
            />
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.TabPanel}>
          <HomeComponent
            type="reading"
            onFinishedClick={handleFinishedClick}
            books={bookObject}
          />
        </TabPanel>
        <TabPanel value="2" className={classes.TabPanel}>
          <HomeComponent
            type="finished"
            onFinishedClick={handleFinishedClick}
            books={bookObject}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
