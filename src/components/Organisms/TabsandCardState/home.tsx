import { Box } from '@mui/material';
import BookCard from '../BookCard/BasicCard'

interface HomeComponentProps {
  type: string;
  onFinishedClick:(arg:Book)=>void;
  books:Array<Book>;
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

const HomeComponent = (props:HomeComponentProps) => {
  const {type} = props

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin:"0%"
      }}
    >
      {props.books.map((book: Book) => {
        const { status } = book
        return (
          <Box>
            {(type === status ) &&
            <BookCard
            key={book.author+book.title}
            onFinishedClick={() => props.onFinishedClick(book)}
              image={book.imageLink}
              author={book.author}
              title={book.title}
              typeOfCard={props.type} />
            }
          </Box>
        );
      })}
    </Box>
  );
}

export default HomeComponent