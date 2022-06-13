import React from 'react';
import ReactDOM from 'react-dom/client';
import Formn from './Formn';
import FormPractice from './FormPractice';
import './index.css';
// import FormPractice from "./FormPractice"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <FormPractice /> */}
  <FormPractice />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
