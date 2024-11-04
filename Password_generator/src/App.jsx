import { useCallback, useEffect, useState ,useRef} from "react"


function App() {
const [length,setlength]=useState(6)
const [numallow,setnumallow]=useState(false)
const [charallow,setcharallow]=useState(false)
const [Password,setPassword]=useState('')

const passRef=useRef(null)

const passwordGenerator= useCallback(()=>{
let pass=''
let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let char

if(numallow) str+="0123456789"
if(charallow) str+="`~!@#$%^&*()-_=+[]{};':"
for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random()*str.length + 1)
  pass+=str.charAt(char)

}
setPassword(pass)

},[length,numallow,charallow,setPassword])

useEffect(()=>{passwordGenerator()},[length,numallow,charallow,])

const cpyPass= useCallback(()=>{
  passRef.current?.select()
  window.navigator.clipboard.writeText(Password)
},[Password])


  return (
    <>
       <div className="h-screen w-full bg-black py-6">
        <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 py-3  text-orange-500 bg-gray-700">
          <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text" value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="password" 
          readOnly
          ref={passRef}/>
          <button className="outline-none bg-blue-500 text-white px-3 py0.5
           shrink-0"
           onClick={cpyPass}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length}
            className="cursor-pointer" 
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label >Length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"  id="numberInput" defaultChecked={numallow}
            onChange={()=>{
              setnumallow((prev)=>!prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"  id="charInput" defaultChecked={charallow}
            onChange={()=>{
              setcharallow((prev)=>!prev)
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
        </div>
       </div>
    </>

  )
}

export default App
