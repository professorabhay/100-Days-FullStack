import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] =  useState(5)

  const addValue = () => {
    // counter += 1;
    setCounter(counter + 1)
    // console.log("Clicked", Math.random());
    // console.log(counter);
  }

  const decValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    } else {
      alert("Reload")
    }
    
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={decValue}>Remove Value</button>
    </>
  )
}

export default App
