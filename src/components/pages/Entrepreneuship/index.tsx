import React, { useContext } from 'react'
import EntrepeneushipPageComponent from '../../Organisms/EntrepeneushipComponent';
import Footer from '../../Organisms/Footer';
import NavBar from '../../Organisms/NavBar';
import image from "../../../Images/explore.png"
import { CardMedia } from '@mui/material';
import TextFieldSearch from '../../molecules/TextFieldSearch';
import { useLocation } from 'react-router-dom';
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


const EnterpeneushipPage = () => {
  const { state } = useLocation();
  const bookObject = state as Array<Book>;
  console.log(state)
  return (
    <React.Fragment>
      <NavBar bookObject={bookObject} />
      <CardMedia
        sx={{ margin: "6% 17% 0% 15%", width: "912px", height: "264px" }}
        image={image}
        title="Paella dish"
      />
      <TextFieldSearch />
      <EntrepeneushipPageComponent bookObject={bookObject} />
      <Footer />
    </React.Fragment>
  );
}

export default EnterpeneushipPage;