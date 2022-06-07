import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import TypographyComponent from "../../atoms/Typography";
import BookReadTime, { TotalReads } from "../../molecules/BookRead";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import { Box, styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import AddToLibrary from "../../molecules/AddToLibrary";


interface BookCardProps {
  image: string;
  title: string;
  author: string;
  typeOfCard?:string;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  titleOfBook: {
    color: "#03314B",
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "23px",
    paddingBottom: "3px",
  },
  authorName: {
    color: "#6D787E",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    paddingBottom: "3px",
  },

  Reads: {
    display: "flex",
    margin: "2px",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    paddingBottom: "6px",
  },

 
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#E1ECFC" : "#308fe8",
  },
}));


const  BookCard = (props: BookCardProps) => {
  const classes = useStyles();
  const newLocal = props.typeOfCard;
  return (
    <Card
      sx={{
        width: "284px",

        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="294.1"
        width="292"
        image={require("../../../Images/book1.png")}
        alt="Book Cover"
      />
      <CardContent>
        <Box className={classes.titleOfBook}>
          <TypographyComponent variant="subtitle" children={props.title} />
        </Box>
        <Box className={classes.authorName}>
          <TypographyComponent variant="body1" children={props.author} />
        </Box>
        <Box className={classes.Reads}>
          <BookReadTime />
          <TotalReads />
        </Box>
      </CardContent>
      {newLocal === "myLibrary" && <AddToLibrary children="Add to library" />}
      {newLocal === "explore" && (
        <Box>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton aria-label="hamburger">
              <MoreHorizIcon />
            </IconButton>
          </CardActions>
          <BorderLinearProgress variant="determinate" value={30} />
        </Box>
      )}
    </Card>
  );
}

export default  BookCard;