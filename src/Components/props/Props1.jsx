import React from 'react'

export const Props1 = (props) => {
  return (
    <div>
        <h1 className='text-5xl font-extrabold text-purple-700 mb-0'>Props1</h1>
        <div>{props.make}</div>
        <div>{props.year}</div>
        <div>{props.color}</div>
    </div>
  )
}
