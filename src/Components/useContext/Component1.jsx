import React from 'react'
import { Component2 } from './Component2'

export const Component1 = () => {
    const user = "Muhammad"
  return (
    <div>Component1
        <Component2 user = {user}/>
    </div>
  )
}
