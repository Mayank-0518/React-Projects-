import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length,setlength]=useState(6)
  const [numallow,setnumallow]=useState(false)
  const [charallow,setcharallow]=useState(false)
  const [password,setpassword]=useState("")

  const passwordref=useRef(null)

  const passwordGenerator= useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow) str+="0123456789"
    if(charallow) str+="!@#$%^&*()-_+?<>[]{}~`"

    for (let i=1;i<=length;i++){
      let temp =Math.floor(Math.random()* str.length +1)
      pass+=str.charAt(temp)
    }
    setpassword(pass)
  },[length,numallow,charallow,setpassword])


  const copyPass= useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordGenerator()
},[length,numallow,charallow,])

  return (
    <div className='bg-gray-400 w-full h-screen p-8' >
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  bg-gray-600 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordref}
              />
              <button 
              className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0
              hover:bg-blue-300'
              onClick={copyPass}
              >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
    
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e)=> {setlength(e.target.value)}}
              />
              <label>Length:{length} </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={()=>{setcharallow((prev)=> !prev)}}
              />
              <label >Characters</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={()=>{setnumallow((prev)=> !prev)}}
              />
              <label >Numbers</label>
            </div>
          </div>
      </div>
      </div>
    
  )
}

export default App
