import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("#555")
 
   return (
    <div className=' min-w-full h-screen duration-200 '
    style={{background:color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
 <button
 onClick={()=> setcolor("red")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"red"}}>Red
 </button>
 <button
 onClick={()=> setcolor("green")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"green"}}>green
 </button>
 
 <button
 onClick={()=> setcolor("yello")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"yello"}}>yello
 </button>
 <button
 onClick={()=> setcolor("orange")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"orange"}}>orange
 </button>
 <button
 onClick={()=> setcolor("blue")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"blue"}}>blue
 </button>
 <button
 onClick={()=> setcolor("black")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"black"}}>black
 </button>
 <button 
 onClick={()=> setcolor("brown")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"brown"}}>brown
 </button>
 <button 
 onClick={()=> setcolor("purple")}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
 style={{backgroundColor:"purple"}}>purple
 </button>
       </div>
 
     </div>
 
    </div>
     
   )
 }
 
 export default App
 
