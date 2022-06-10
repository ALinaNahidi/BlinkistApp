import { ThemeProvider } from '@emotion/react';
import React from 'react'
import baseTheme from '../../../themes';
import TextHeader from '../../atoms/TextHeader';
import Footer from '../../Organisms/Footer';
import NavBar from '../../Organisms/NavBar';
import BlinkistTabs from '../../Organisms/Tabs';

const MyLibraryPage = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      {/* <Box> */}
        <NavBar />
        <TextHeader children="My Library" />
        <BlinkistTabs />
        <Footer />
      {/* </Box> */}
    </ThemeProvider>
  );
}


export default MyLibraryPage;