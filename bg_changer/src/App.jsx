import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setcolor] = useState("cyan")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
            <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full'>
              <button 
              onClick={ () => setcolor("red")
              }
              className='outline-none rounded-full px-4 shadow-lg'
              style={{backgroundColor:"red"}}>
                Red
              </button>
              <button
              onClick={ () => setcolor("brown")
              }
              className='outline-none rounded-full px-4 shadow-lg'
              style={{backgroundColor:"brown"}}>
                Brown
              </button>
              <button
              onClick={ () => setcolor("yellow")
              }
              className='outline-none rounded-full px-4 shadow-lg'
              style={{backgroundColor:"yellow"}}>
                yellow
              </button>
              <button
              onClick={ () => setcolor("grey")
              }
              className='outline-none rounded-full px-4 shadow-lg'
              style={{backgroundColor:"grey"}}>
                grey
              </button>
              <button
              onClick={ () => setcolor("green")
              }
              className='outline-none rounded-full px-4 shadow-lg'
              style={{backgroundColor:"green"}}>
                green
              </button>

            </div>
          </div>
      </div>
    </>
  )
}

export default App
