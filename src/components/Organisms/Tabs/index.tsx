// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import TabsandCardState from "../TabsandCardState/home";
// import { makeStyles } from "@mui/styles";
// import { Theme } from "@emotion/react";
// import { getBooks } from "../../../Data/data";
// import DataContext from "../../../context/dataContext";
// type Book = {
//   author: string;
//   country: string;
//   imageLink: string;
//   language: string;
//   link: string;
//   pages: number;
//   title: string;
//   year: number;
//   readTime: string;
//   readersCount: string;
//   status: string;
// };

// interface BlinkistTabsProps {
//   book: Book;
//   tab: string;
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   TabBox: {
//     margin: "0% 15%",
//     padding: "0 12px",
//     borderBottom: "0",
//     borderColor: "divider",
//   },
//   TabPanel: {
//     margin: "0% 15%",
//     padding: "0 12px",
//   },
//   Tab: {
//     width: "25%",
//     paddingLeft: "0px !important",
//   },
// }));

// export default function BlinkistTabs(props: BlinkistTabsProps) {
//   console.log(props);
//   const [bookObject, setBookObject] = React.useState(React.useContext(DataContext));

//   const [value, setValue] = React.useState(props.tab);
//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   const classes = useStyles();

//   React.useEffect(() => {
//     const { book } = props;
//     if (props.tab === "2") {
//       const bookObjectTemp = [...bookObject];
//       var index = -1;
//       for (let i = 0; i < bookObjectTemp.length; i++) {
//         if (
//           bookObjectTemp[i].title === book.title &&
//           bookObjectTemp[i].pages === book.pages
//         )
//           index = i;
//       }

//       console.log(index);
//       bookObjectTemp[index] = { ...book };

//       bookObjectTemp[index].status === "myLibrary"
//         ? (bookObjectTemp[index].status = "finished")
//         : (bookObjectTemp[index].status = "finished");
//       setBookObject([...bookObjectTemp]);
//       console.log(bookObject);
//     }
//   }, [value]);

//   const handleFinishedClick = (book: Book) => {
//     const bookObjectTemp = [...bookObject];
//     const index = bookObjectTemp.indexOf(book);
//     bookObjectTemp[index] = { ...book };

//     bookObjectTemp[index].status === "reading"
//       ? (bookObjectTemp[index].status = "finished")
//       : (bookObjectTemp[index].status = "reading");

//     setBookObject([...bookObjectTemp]);
//     console.log(bookObject);
//   };

//   return (
//     <Box>
//       <TabContext value={value}>
//         <Box className={classes.TabBox}>
//           <TabList
//             onChange={handleChange}
//             aria-label="lab API tabs"
//             sx={{ alignItems: "self-start", justifyContent: "flex-start" }}
//           >
//             <Tab
//               disableRipple
//               label="Currently Reading"
//               value="1"
//               className={classes.Tab}
//             />
//             <Tab
//               disableRipple
//               label="Finished"
//               value="2"
//               className={classes.Tab}
//             />
//           </TabList>
//         </Box>
//         <TabPanel value="1" className={classes.TabPanel}>
//           <TabsandCardState
//             type="reading"
//             onFinishedClick={handleFinishedClick}
//             books={bookObject}
//           />
//         </TabPanel>
//         <TabPanel value="2" className={classes.TabPanel}>
//           <TabsandCardState
//             type="finished"
//             onFinishedClick={handleFinishedClick}
//             books={bookObject}
//           />
//         </TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabsandCardState from "../TabsandCardState/home";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";

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

interface BlinkistTabsProps {
  value: string;
  onFinishedClick: (arg: Book) => void;
  bookObject: Array<Book>;
}

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

export default function BlinkistTabs(props: BlinkistTabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
              disableRipple
              label="Finished"
              value="2"
              className={classes.Tab}
            />
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.TabPanel}>
          <TabsandCardState
            type="reading"
            onFinishedClick={(book)=>props.onFinishedClick(book)}
            books={props.bookObject}
          />
        </TabPanel>
        <TabPanel value="2" className={classes.TabPanel}>
          <TabsandCardState
            type="finished"
            onFinishedClick={(book)=>props.onFinishedClick(book)}
            books={props.bookObject}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
