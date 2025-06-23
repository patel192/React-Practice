import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Usercontext'
export const UseContext1 = () => {
  const userobj = useContext(UserContext)
  return (
    <>
    <div>UseContext1</div>
    {JSON.stringify(userobj)}
    </>
  )
}
