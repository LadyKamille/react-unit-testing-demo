import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "../src/app/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
