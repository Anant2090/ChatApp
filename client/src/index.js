import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TransactionCintext from "./Context/TransactionContextApi";
const root = ReactDOM.createRoot(document.getElementById("root"));
import { BrowserRouter } from "react-router-dom";

root.render(

  <TransactionCintext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TransactionCintext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
