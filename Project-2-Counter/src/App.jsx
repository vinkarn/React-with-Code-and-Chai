import {useState} from 'react'

import './App.css'

function App() {
  // let counter = 5;
  let [counter,setCounter] = useState(15)
  // data_type array_of_two_elements = calling useState(default value of counter(the variable we declared))
  // the variable counter is declared here only, in this line
  
  const addValue = () =>{
    console.log("clicked", counter)
    counter= counter +1
    setCounter(counter)   //updating value of counter

  }
  const removeValue= () =>{
    if(counter==0){//this if statement prevents from going into negative numbers
      return
    }
    counter = counter - 1
    setCounter(counter)
  }




  return (
    <>
      <h1>Chai, react aur Vinay</h1>
      <h2>Counter value: {counter} </h2>

      {/* add value to the above number */}
      <button onClick={addValue}>Add value: {counter}</button>
      {/* we will call the add value function whenever a mouse is clicked */}
      <br />

      {/* reduce value from the above number */}
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
