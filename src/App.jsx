


import { useState } from 'react'
import './App.css'

function App() {

  const[count , setCount]= useState(0)


  

  return (
  <div>

     <div >
     
        <button style={{backgroundColor:"yellow"}} onClick={()=>{if(count<10){setCount(count + 1 )}else{setCount(10)}}}>Increment</button>  
     
        <h2>{count}</h2>


        <button style={{backgroundColor:"yellow"}}onClick={()=>{if(count>0){setCount(count - 1)}else{setCount(0)}}}>Decrement</button>

     </div>
  </div>
  )
}

export default App
