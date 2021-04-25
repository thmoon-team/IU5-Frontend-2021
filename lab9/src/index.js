import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const app= (
  <BrowserRouter>
  <App />
  </BrowserRouter>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

