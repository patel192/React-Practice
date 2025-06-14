import React from 'react'

export const Props2 = (props) => {
    const {dataArray} = props
  return (
    <div>
        {dataArray.map((item)=>{
            return <h2>{item}</h2>
        })}
    </div>
  )
}
