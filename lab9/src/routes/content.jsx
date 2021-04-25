import {React,useState,useEffect} from 'react';
import Name from '../components/JSX/Name';
import Repo from '../components/JSX/repo';
import Event from '../components/JSX/event';
import Avatar from '../components/JSX/avatar';
import '../components/JS/workflow';
import './content.css'
import crown from '../components/crown.png'
import { useHistory } from 'react-router';
import '../key.env'

let key = process.env.REACT_APP_API_KEY;
function Content({err}) {
    const [events,setEvents] = useState({});
    const [repos,setRepo] = useState([]);
    const [obj,setObj] = useState({});
    let name,com;
    const his =useHistory('/lab9/build/about');
    useEffect(()=>{
    if(localStorage.getItem('input')) {
    let data_name = localStorage.getItem('input');
    fetch('https://api.github.com/users/'+ data_name).then(data=>data.json().then(data=>{
        setObj(data);
        if (data.message !== "Not Found"){
        console.log('z tut');
        fetch('https://api.github.com/users/'+data_name +'/repos').then(data => data.json().then(data =>setRepo(data)))
        .catch(er => console.log(er));
        fetch('https://api.github.com/users/'+data_name +'/events').then(data => data.json().then(data =>{  
        console.log(data[0]);
        return setEvents(data.find(val => val.type === 'PushEvent'));
         }));
        
    }      
}))
    .catch(er=>console.log('Z TUTUTUTU'));}
    else setObj({message: 'Not Found'})
    
    
    },[])

    if( 'message' in obj) {
         if(obj.message === 'Not Found') {
             document.getElementById('er').style.display ='block';
             console.log('kla');
        }}else {
           if(obj.login === 'Crusader727' || obj.login === 'youraavdeev') document.getElementById('crown').style.display ='block';
           if(document.getElementById('done') !== null) document.getElementById('done').style.display ='flex';
           if(events) if(events.repo !== undefined) name= events.repo.name; else name='none';
           if(events) if(events.payload !== undefined) 
               if(events.payload.commits !== undefined) 
                   com = events.payload.commits.last().message; else com='none'
        }
        
   

    return (
        <>
        <div className ='content' id='done'>
          <div className='right_block'>
            <div className='lol'>
                <img src={crown} alt='crown' id='crown' />
                <Avatar url={obj.avatar_url}/>
                <Name str={obj.login} />
            </div>
          </div>
          <div className ="lef_block">
              <div>
            <p className='title'> Repositories: {repos.length} </p>
            <div className='repos'>
            {repos ? repos.map(el =>(
              <Repo children={el.full_name} />
            )) : <Repo children={'none'}></Repo>}
            </div>
            </div>
            <Event repoi={name} comm={com}/>  
          </div>
        </div>
        <div className='error' id='er'> 
        404 Такого пользователя не существует
        </div>
        </>
        
    );
    
  }

  export default Content;