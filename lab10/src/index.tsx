import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { AppState, createRootReducer } from './store';
import { ContentReduser, initial } from './store/content/reducer';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore, Store} from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension';
import {initState} from './store/input/reducer';
import thunk from 'redux-thunk';
import { InpValueState } from './store/input/inp';

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

