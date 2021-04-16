
import React from 'react';
import './App.css';

let title_todos ;



function TodosDone ({title, id, oncl}) {
  return(
    <div className="done_todos" id={id}>
      <label className="labelclass" >{title}</label>
      <span className="krest" id={id} onClick={oncl}>x</span>
    </div>
  );
}

function TodosCheckbox ({title, id_todos1, onclk,oncl}){
  return (
    <div id={id_todos1} className="todoboll">
      <div>
      <input type="checkbox" id={id_todos1} onClick={onclk}></input>
      <label >{title}</label>
      </div>
      <span className="krest" id={id_todos1} onClick={oncl}>x</span>
      
    </div>
  );
}

function App() {

  const [titels,setTitles] = React.useState([]);
  const [acc,setacc] = React.useState([]);

  
  function but(ev) {
    setTitles([]);
    setacc([]);
  }
  function del_it(ev) {
    console.log(ev.target.id);
    titels.splice(parseFloat(ev.target.id),1);
    setTitles([...titels]);
    console.log(titels);
  }

  function done(id){
    console.log(id.target.id)
    let title_done = titels.find((item, index, titels)=> index === parseFloat(id.target.id));
    console.log(title_done);
    titels.splice(parseFloat(id.target.id),1);
    setTitles(titels);
    setacc([...acc,title_done]);
    id.target.checked =false;
  }

  function on_key(ev) {
    if(ev.key === 'Enter') {
      console.log(ev.target.value)
      title_todos = ev.target.value;
      setTitles([...titels,title_todos]);
      console.log(titels);
      ev.target.value = '';
    }
  }
  function no_done(ev) {
    let title_bla  =acc.find((item,index,acc)=>index === parseFloat(ev.target.id));
    acc.splice(parseFloat(ev.target.id),1);
    setacc(acc);
    setTitles([...titels,title_bla]);
  }

 
  
  let id_todos=-1;
  let id_todos_done=-1;

  return (
    <div className="body">
      <div className="title"><span>My Pretty Todos</span></div>
      <div className="Todos">
        <div className="to_do">
          <span className="nameform">will be done:</span>
          <div className="form" id="todos1">
           {titels.map(el =>{
             id_todos++;
             console.log(el);
             return (
               <TodosCheckbox title={el} id_todos1={id_todos} onclk={(ev)=>done(ev)} oncl={(ev)=>del_it(ev)}/>
             );
           })}
            <input
              id="todo"
              placeholder="write here your todos and press the enter"
              onKeyDown={(ev)=>on_key(ev)}
            />
          </div>
          </div>
          <div className="buttons">
        <button className="but_wbd" onClick={()=>{setTitles([])}}>Сlear will be done</button>
        <button className="but_wbd" onClick={(ev)=>but(ev)}>Clear all</button>
        <button className="but_wbd" onClick={()=>{setacc([])}}>Clear done</button>
      </div>
        <div className="to_do">
          <span className="nameform">done:</span>
          <div className="form"> 
          {acc.map(item =>{
            id_todos_done++;
            return(
            <TodosDone title={item} id={id_todos_done} oncl={(ev)=>no_done(ev)}/>
          )})}
          </div>
        </div>
       
      </div>
    
    </div>
  );
}

export default App;
