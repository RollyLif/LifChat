import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button class='btn btn-danger'>Button</button>
    </div>
  )
}

export default App
