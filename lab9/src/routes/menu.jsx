import {React,useCallback} from 'react';
import {Link, Route,Switch,useHistory} from 'react-router-dom';
import NavBar from '../components/navbar'
import Content from './content.jsx'
import PageNotFound from './PaNoFound'


function Menu() {
    const his =useHistory();
  
    const back = useCallback(()=>{
      his.replace('/lab9/build','/lab9/build/about');
    },[his]);
  
    const call =(ev)=>{
      if(ev.keyCode === 13){
          if(ev.target.value !== ''){
            localStorage.setItem('input',ev.target.value);
          }
        console.log(ev.target.value);
        his.push('/lab9/build/about');
      }
    };
    const err = () =>{
        his.replace('/lab9/build/error','/lab9/build/about');
    }
    const dat =() =>{
        let inp =document.getElementById('inp');
        if (inp !== '') {
            localStorage.setItem('input',inp.value);
        }
        console.log(inp.value);
        his.push('/lab9/build/about');
    }
  
     return(
         <> 
      <Switch>
        <Route exact path='/lab9/build' >
          <NavBar onk={call} dat={dat}/>
        </Route>
        <Route path='/lab9/build/about' >
          <NavBar oncl={back} />
          <Content  err={err} /> 
        </Route>
        <Route path='/lab9/build/error' component={PageNotFound} />
      </Switch>
      </>
     );
  }

  
  export default Menu;