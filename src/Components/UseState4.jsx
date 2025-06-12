import { useState } from "react"
export const UseState4 = () => {
    const [textlength, settextlength] = useState()
  return (
    <div>
      <h1>Length Counter🛣️</h1>
        <h1>{textlength}</h1>
        <input type="text" onChange={(event)=>{settextlength(event.target.value.length)}} />
    </div>
  )
}
