import * as React from "react";

import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";

interface AddToLibraryProps {
  children?: string | JSX.Element;
  variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const useStyles = makeStyles((theme: Theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    display: "flex",
    borderTop: "1px #E1ECFC solid",
    padding: "2px",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    backgroundColor: "#fff",
    color: "#0365F2",
    "&:hover": {
      backgroundColor: "#0365F2",
      color: "#fff",
    },
  },

}));

const AddToLibrary = (props: AddToLibraryProps) => {
    const classes = useStyles();
 return (
   <Box className={classes.button}>
     <Button className={classes.button} >
       <AddIcon fontSize="medium" />
       <Typography variant="body1">{props.children}</Typography>
     </Button>
   </Box>
 );
}

export default AddToLibrary;
