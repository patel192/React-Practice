import React from 'react'
import { useState,useEffect } from 'react'
export const Counter = () => {
    const [count, setcount] = useState(0)
useEffect(()=>{
    console.log(count)
    return
},[count])
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}
