import React, { useContext,createContext } from 'react'

export const UseContext1 = () => {
  const User = useContext(Usercontext)
  return (
    <div>useContext1
      <h1>{`Hello ${User} welcome`}</h1>
    </div>
  )
}
