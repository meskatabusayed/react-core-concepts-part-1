/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



import './App.css'
import Todo from './todo';
function App() {


  return (
    <>
      
       
      <h1>Vite + React</h1>
     {/* <Person></Person>
      <Student name="DU" address="Dhaka"></Student>
      <Student name="CU" address="ctg"></Student>
      <Student name="BWU" address="India"></Student>
      <Student></Student>
      <Developer></Developer>
      <Device name="laptop" price="30000"></Device>
      <Device name="mouse" price="400"></Device>
      <Device name="watch" price="2000"></Device> */}
    <Todo task="Go University" isDone={true}></Todo>
    <Todo task="come University" isDone={true}></Todo>
    <Todo task="cooking food" isDone={false}></Todo>
    </>
  )
}

export default App;

function Person(){
  const name = "Meskat";
  const age = 21;
  return (
   
    <h3>My name is {name} and age is {age}</h3>
  )


}

function Student({name="null" , address="null"}){

  return (
    <div className='borderStyle'>
    <h2>University Name : {name}</h2>
    <h3>University Address : {address}</h3>
    </div>
  )
}

function Developer(){
  const developerStyle = {
    border : "2px solid purple",
    padding : "20px",
    margin: "20px",
    borderRadius : "2px"
  }
  return(
    <div style={developerStyle}>
      <h1>Javascript</h1>
      <h2>IDE</h2>
    </div>
  )
}

function Device(props){
  console.log(props);
  return(
    <>
    <h1>Name : {props.name} </h1>
    <h2>Price : {props.price}</h2>
    </>
  )
}
