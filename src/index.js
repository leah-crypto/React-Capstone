import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthConPro } from "./store/authCon";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthConPro>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthConPro>
  </React.StrictMode>
);
