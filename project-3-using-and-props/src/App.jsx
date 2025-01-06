import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let Friends ={
    first : "laptop",
    second : "phone",

  }
  let Ages=[21,32,37]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind check</h1>
      <Card topic="Science of React"></Card>
      
      <Card topic="Science of Chai"></Card>
      
    </>
  )
}

export default App
