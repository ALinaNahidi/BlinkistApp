import React from 'react'
import EntrepeneushipPageComponent from '../../Organisms/EntrepeneushipComponent';
import Footer from '../../Organisms/Footer';
import NavBar from '../../Organisms/NavBar';
import image from "../../../Images/explore.png"
import { Box, CardMedia } from '@mui/material';
import TextFieldSearch from '../../molecules/TextFieldSearch';


const EnterpeneushipPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <CardMedia
        sx={{ margin: "6% 17% 0% 15%", width: "912px", height: "264px" }}
        image={image}
        title="Paella dish"
      />
   <TextFieldSearch />
      <EntrepeneushipPageComponent />
      <Footer />
    </React.Fragment>
  );
}

export default EnterpeneushipPage;