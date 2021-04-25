import {React,useCallback} from 'react';
import {Route,Switch,useHistory} from 'react-router-dom';
import NavBar from '../components/navbar'
import Content from './content.jsx'
import PageNotFound from './PaNoFound'


function Menu() {
    const his =useHistory();
  
    const back = useCallback(()=>{
      his.replace('/','/about');
    },[his]);
  
    const call =(ev)=>{
      if(ev.keyCode === 13){
          if(ev.target.value !== ''){
            localStorage.setItem('input',ev.target.value);
          }
        console.log(ev.target.value);
        his.push('/about');
      }
    };
    const err = () =>{
        his.replace('/error','/about');
    }
    const dat =() =>{
        let inp =document.getElementById('inp');
        if (inp !== '') {
            localStorage.setItem('input',inp.value);
        }
        console.log(inp.value);
        his.push('/about');
    }
  
     return( 
      <Switch>
        <Route exact path='/' >
          <NavBar onk={call} dat={dat}/>
        </Route>
        <Route path='/about' >
          <NavBar oncl={back} />
          <Content  err={err} /> 
        </Route>
        <Route path='/error' component={PageNotFound} />
      </Switch>
     );
  }

  
  export default Menu;