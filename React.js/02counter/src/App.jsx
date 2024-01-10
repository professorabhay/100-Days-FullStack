import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] =  useState(5)

  const addValue = () => {
    // counter += 1;
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) 
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
      <div>
        This is the interview question solution. In react all similiar or common or same task happening multiple times is treat as a bundle. So, the counter which is comment will treat as one because all doing same tash but using prevCounter we said to update its previous value.
      </div>
    </>
  )
}

export default App
