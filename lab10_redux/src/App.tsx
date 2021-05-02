import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Homepage from './routes/Homepage';
import Content from './routes/SearchContent'
import PageNotFound from './routes/PageNotFound';
import logo from './ico/icons8-github-50.png';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import {AppState} from './store/index'


const App: React.FC = () => {
  console.log();
  return (
    <>
      <header className='header'> 
        <img src={logo} alt='logo' />
        <span className='title'>GitSearch</span>
      </header>
      <Switch>
      
        <Route exact path='/' component={Homepage} />
        <Route path='/search' component={Content}/>
        <Route path='/error' component={PageNotFound}/>
      
      </Switch>
    </>
  );
}

export default App;
