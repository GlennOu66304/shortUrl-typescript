import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistor } from './store';
// import { PersistGate } from 'redux-persist/integration/react';
import { PersistGate } from 'redux-persist/es/integration/react';
// https://github.com/rt2zz/redux-persist/issues/1024
import store from "./store";

import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
