
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
// chakra
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

// react-router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// routes
import HomePage from './pages/home-page/home-page';
import LandingPage from './pages/landing-page/landing-page';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/spotability/redirect/:email" element={<App />} />
      </Routes>  
    </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
