import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <div><img src={props.url} alt="" /></div>
        <div>
            <h5>Car-Name {props.name}</h5>
            <p>About the car {props.about}</p>
        </div>
    </div>
  )
}
