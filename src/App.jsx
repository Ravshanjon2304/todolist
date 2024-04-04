import { useState } from 'react'
import './App.css'
import ToDolist from './ToDolist';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDolist/>
    </>
  )
}

export default App
