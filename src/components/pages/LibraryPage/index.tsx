import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import TypographyComponent from "../../atoms/Typography";
import Footer from "../../Organisms/Footer";
import NavBar from "../../Organisms/NavBar";
import BlinkistTabs from "../../Organisms/Tabs";
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

interface LocationState {
  book: Book ;
  tab:string;
}
const defaultProps = {
  book: {
    author: "",
    country: "",
    imageLink:
      "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 1958,
    readTime: "",
    readersCount: "",
    status: "",
  },
  tab: "1",
};

const MyLibraryPage = () => {
   const { state } = useLocation();
   var book  = defaultProps.book;
   var tab = defaultProps.tab;
   const check = state as LocationState;
   console.log(check)
   if(check){
      book = check.book;
      tab = check.tab;
    }
  
    console.log(book)
  return (
    <React.Fragment>
      <NavBar />
      <Box sx={{margin:"8% 15% 4%"}}>
        <TypographyComponent children="My Library" variant="h3" />
      </Box>
      <BlinkistTabs book={book} tab={tab}/>
      <Footer />
    </React.Fragment>
  );
};

export default MyLibraryPage;
