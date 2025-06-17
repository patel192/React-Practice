import React from 'react'
import { useState } from 'react'
import { ChildComponent } from './ChildComponent'
export const UseCallback1 = () => {
    const [count, setcount] = useState(0)
    const handleclick=()=>{
        alert("button clicked")
    }
  return (
    <div>
        <p>{count}</p>
        <ChildComponent onClick={handleclick}/>
        <button onClick={(count)=>setcount(count+1)}>Increment</button>
    </div>
  )
}
