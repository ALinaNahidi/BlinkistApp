import React from 'react'
import EntrepeneushipPageComponent from '../../Organisms/EntrepeneushipComponent';
import Footer from '../../Organisms/Footer';
import NavBar from '../../Organisms/NavBar';
import image from "../../../assets/Images/Explore.png"
import { CardMedia } from '@mui/material';
import TextFieldSearch from '../../molecules/TextFieldSearch';
import { useLocation } from 'react-router-dom';
import EntrepeneushipTemplate from '../../template/EntrepeneushipPage';
type Book = {
  id: number;
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
  console.log(bookObject)
  return (
    <React.Fragment>
      <NavBar bookObject={bookObject} />
      <EntrepeneushipTemplate
        image={
          <CardMedia
            sx={{ margin: "10% 12% 0% 0%  ", MaxWidth: "912px", height: "264px" }}
            image={image}
            title="Paella dish"
          />
        }
        searchBar={<TextFieldSearch />}
        entrepeneushipComponent={
          <EntrepeneushipPageComponent bookObject={bookObject} />
        }
      />

      <Footer />
    </React.Fragment>
  );
}

export default EnterpeneushipPage;