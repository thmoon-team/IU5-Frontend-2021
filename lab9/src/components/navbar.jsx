import {React} from 'react';
import logo from '../components/icons8-github-50.png';
import {Route,Switch,Link} from 'react-router-dom';
import ButBack from './JSX/butback.jsx'
import '../components/JSX/nav_bar.css'

function NavBar({oncl, dat,onk}) {
    return(
        <div className='NavBar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='title_name'>
                Git SEARCH
            </div>
            <div className='inp_data'>
                    <Switch>
                           
                        <Route exact path='/lab9/build'>
                            <input className="inp" type="text" onKeyDown={onk} placeholder='введите имя ползователя...' id='inp' ></input>
                            <Link to='/lab9/build/about'>
                            <button className="but_data" onClick={dat} >ok</button>
                            </Link>
                        </Route>
                        <Route path='/lab9/build/about'>
                            <ButBack  oncl={oncl}/>
                        </Route>
                    </Switch>
            </div>
        </div>
    );
  }

  export default NavBar;