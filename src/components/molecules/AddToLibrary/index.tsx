import * as React from "react";

import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";

interface FinishedandReadAgainProps {
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
  },

}));

const FinishedandReadAgain = (props: FinishedandReadAgainProps) => {
    const classes = useStyles();
 return (
   <Box className={classes.button}>
     <Button className={classes.button}>
       <Typography variant="body1">{props.children}</Typography>
     </Button>
   </Box>
 );
}

export default FinishedandReadAgain;
