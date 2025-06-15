import React from 'react'
import { UseContext1 } from './useContext1'

export const Component2 = ({User}) => {
  return (
    <div>Component2
        <h1>Hello {User}</h1>
        <UseContext1 user={User}/>
    </div>
  )
}
