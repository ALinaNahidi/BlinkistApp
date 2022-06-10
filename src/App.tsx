import { css, Global } from '@emotion/react';
import React from 'react';
import MyLibraryPage from './components/pages/LibraryPage';


function App() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          html {
            margin: 0;
            padding:0;
           
          }
        `}
      />
      <MyLibraryPage />
    </React.Fragment>
  );
}

export default App;
