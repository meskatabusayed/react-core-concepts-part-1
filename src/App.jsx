

import './App.css'

function App() {


  return (
    <>
      
       
      <h1>Vite + React</h1>
     <Person></Person>
      <Student></Student>
      <Developer></Developer>
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

function Student(){

  return (
    <div className='borderStyle'>
    <h2>University Name : </h2>
    <h3>University Address : </h3>
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
