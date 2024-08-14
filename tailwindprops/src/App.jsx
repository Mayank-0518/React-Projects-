import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/components/Cards'
import Cards from '../components/cards'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-7'>Tailwind Test</h1>
      <Cards />
    </>
  )
}

export default App
