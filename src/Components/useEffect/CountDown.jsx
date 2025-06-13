import React from 'react'
import { useState } from 'react'
export const CountDown = () => {
  const [count, setcount] = useState(0)
    return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}
