import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setcounter]=useState(0)
   const countvalue=()=>{setcounter(counter+1)
    console.log(counter)
   }
   

  return (
    <>
      <h1>hello </h1>
      <p1> The value of count is {counter}</p1>
      <br />
      <button onClick={countvalue}>Count</button>
    </>
  )
}

export default App
