import React from "react";
import Footer from "../../Organisms/Footer";
import NavBar from "../../Organisms/NavBar";
import { useLocation } from "react-router-dom";
import BookDetailComponent from "../../Organisms/BookDetailComponent";

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

interface LocationState{  
    book:Book;
}

const BookDetailPage = () => {
    const {state} = useLocation();
    const book = state as Book;
  return (
    <React.Fragment>
      <NavBar />
      <BookDetailComponent book={book} />
      <Footer />
    </React.Fragment>
  );
};

export default BookDetailPage;
