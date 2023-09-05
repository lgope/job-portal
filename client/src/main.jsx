import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AuthProvider from "./contexts/AuthProvider.jsx";
import store from "./redux/store.js";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("I-Am-Groot")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
