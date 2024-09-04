import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  const increaseCounter = () => {
    // console.log("Clicked", Math.random());
    // console.log("Clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
