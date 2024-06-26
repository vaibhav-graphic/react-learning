import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

      //variable function 
  let [counter,setCounter] = useState(0)

  const addValue =  () => {
    if(counter < 20){
      setCounter(counter + 1)

      // setCounter( prevCOunter => prevCOunter + 1);
      // setCounter( prevCOunter => prevCOunter + 1);
      // setCounter( prevCOunter => prevCOunter + 1);
      // setCounter( prevCOunter => prevCOunter + 1);
      
      // fiber algo work in batch that why 4 setCounter inc count by 4
      // here we learn taht every hook function also have function call back in it
      // above is the syntax 
      // interview question
    }
    console.log("counter", counter);
  }

  const reduceValue = () => {
    if(counter >= 1){
      setCounter(counter - 1);
    }
    console.log("counter", counter);
  }

  return (
    <>
      <h1>king of ghost</h1>
      <h3>counter value : {counter}</h3>      
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={reduceValue}>reduce value</button>
    </>
  )
}

export default App
