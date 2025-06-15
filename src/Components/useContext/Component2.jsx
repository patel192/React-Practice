import React from 'react'
import { UseContext1 } from './useContext1'

export const Component2 = ({user}) => {
  return (
    <div>Component2
        <h1>Hello {user}</h1>
        <UseContext1 user={user}/>
    </div>
  )
}
