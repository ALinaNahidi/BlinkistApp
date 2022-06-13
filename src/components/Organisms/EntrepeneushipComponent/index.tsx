import * as React from "react";
import Box from "@mui/material/Box";
import CardStateTrending from "./cardState"
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import { getBooks } from "../../../Data/data";
import {SubHeader} from "../../atoms/TextHeader";
import DataContext from "../../../context/dataContext";

interface EntrepeneushipComponentProp{
  bookObject: Array<Book>;
}


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
    paddingLeft: "0px !important",
  },
}));

export default function EntrepeneushipPageComponent(props:EntrepeneushipComponentProp) {
 

 const {bookObject} = props;
  const classes = useStyles();

  const handleFinishedClick = (book: Book) => {
    console.log("from home");
    
  };
  console.log(bookObject)

  return (
    <Box>
      <SubHeader children="Trending blinks" varient="h5" />
      <Box className={classes.TabPanel}>
        <CardStateTrending
          type={["myLibrary", "reading"]}
          onFinishedClick={handleFinishedClick}
          books={bookObject}
          limit={bookObject.length > 6 ? 6 : bookObject.length}
        />
      </Box>
      <SubHeader children="Just added" varient="h5" />
      <Box className={classes.TabPanel}>
        <CardStateTrending
          type={["myLibrary"]}
          onFinishedClick={handleFinishedClick}
          books={bookObject}
          limit={bookObject.length > 3 ? 3 : bookObject.length}
    
        />
      </Box>

      <SubHeader children="Featured audio blinks" varient="h5" />
      <Box className={classes.TabPanel}>
        <CardStateTrending
          type={["myLibrary"]}
          onFinishedClick={handleFinishedClick}
          books={bookObject}
          limit={bookObject.length > 3 ? 3 : bookObject.length}
    
        />
      </Box>
    </Box>
  );
}