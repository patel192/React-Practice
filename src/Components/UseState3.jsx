import React from 'react'
import { useState } from 'react'
export const UseState3 = () => {
  const text = "Hello ,Btw I am React StateManagement Hook There!😊😊"
  const [status, setstatus] = useState(true)  
  return (

    <div>
        {status && <h1>{text}</h1>}
        <button onClick={()=>setstatus(!status)}>Show/Hide</button>
    </div>
  )
}
