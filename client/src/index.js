<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
=======
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> d5cace5529400098ae66e30bd99e970f051e99b0
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
