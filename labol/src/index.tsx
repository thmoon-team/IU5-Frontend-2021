import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createRootReducer } from './store';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore, Store} from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store:Store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

