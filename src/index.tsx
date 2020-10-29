import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/core';
import theme from './theme';
import { ThreadProvider } from './context/ThreadContext';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThreadProvider>
        <ChakraProvider theme={theme} >
          <ColorModeScript initialColorMode="light" />
          <App />
        </ChakraProvider>
      </ThreadProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
