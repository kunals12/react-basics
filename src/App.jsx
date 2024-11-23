import { useState, useEffect } from "react";
import './App.css'

function App() {
  return (
    <div>
      <b>Hi there</b>
      <Counter />
    </div>

  )
}




function Counter() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
  }, [])





  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Counter</button>
    <button onClick={decreaseCount}>Decrease Counter</button>

  </div>
}

export default App
