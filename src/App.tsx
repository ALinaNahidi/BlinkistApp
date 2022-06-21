import React from "react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "./themes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EnterpeneushipPage from "./components/pages/EntrepreneushipPage";
import MyLibraryPage from "./components/pages/LibraryPage";
import BookDetailPage from "./components/pages/BookDetailPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, CircularProgress } from "@mui/material";

function App() {
  // const { isLoading } = useAuth0();
  // if (isLoading) return (
  //   <Box sx={{ display: "flex", margin:"50%" }} color="primary">
  //     <CircularProgress />
  //   </Box>
  // );

  return (
    <ThemeProvider theme={baseTheme} data-testid="app">
      <Routes>
        <Route path="/" element={<MyLibraryPage />} />
        <Route path="BookDetailPage" element={<BookDetailPage />} />
        <Route path="entrepeneuship" element={<EnterpeneushipPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
