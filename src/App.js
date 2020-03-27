import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {            
  const nayokks=['Alamgir','Salman','Ferdaus','Bappi','shuvo']
  const friends = [
    {name :'karim', age:'23'},
    {name :'Rahim', age:'33'},
    {name :'Jodu' ,  age:'63'},
    {name :'Modu' ,  age:'43'},
    {name :'KOdal' ,  age:'13'},
  ]

    // const productsNames = products.map(item => item.name)
    // console.log(productsNames)
    // const nayoks =nayokks.map(x =>x)
    // console.log(nayoks)
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <p>I am a react person</p>
        
              {nayokks.map(item => <li> {item} </li>)} 
              {friends.map(item => <li>{item.name}</li>)}
              {friends.map(x => <Friend friend={x}></Friend>)}
        
        
        <Person name ="Manna" nayika="moushumi"></Person>
       
      </header>

    </div>
  );
}

function Friend(props){
  
  const productStyle =
  {
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, age} = props.friend;
  

  return ( 
  <div style={productStyle}>
    <h3>{name} </h3>
  <h5>{age}</h5>
    <button>Befriend now</button>
  </div>
   )
}


function Person(nanak){
  const personStyle ={
    border:'5px solid red',
     margin:'20px',
     width:'600px',
     borderRadius:"5px"
    }
  return (
    <div style={personStyle}>
       <h1>Name : {nanak.nayika}</h1>
       <h3>Hero : {nanak.name}</h3>
    </div>
  )
  
}

function Counter(props){

  const [count,setCount] = useState(10);
  // const handleIncrease = () => {setCount( count + 1 );}

  
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick= {() => {setCount( count + 1 );}}>Increase</button>
      <button onClick= {() => {setCount( count - 1 );}}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
        <h3>Dynamic Users : {users.length} </h3>
        <ul>
          {console.log(users)}
            {
              users.map( user => <li>{user.phone}</li>)
            }

        </ul>
    </div>
  )

}

export default App;
