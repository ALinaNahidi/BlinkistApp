import { Box } from '@mui/material';
import React from 'react'
import data from '../../Data/data.json'
import BookCard from '../Organisms/BookCard/BasicCard'

interface HomeComponentProps{
  type:string
}

const HomeComponent = (props:HomeComponentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.map((book) => (
        <Box sx={{ margin: "3% 5% 3% 0%" }}>
          <BookCard
            image={book.imageLink}
            author={book.author}
            title={book.title}
            typeOfCard={props.type}
          />
        </Box>
      ))}
    </Box>
  );
}

export default HomeComponent