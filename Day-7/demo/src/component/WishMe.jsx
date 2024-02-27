import React, { useState } from 'react'

const WishMe = () => {
    let [counter, setCounter] = useState(100)
    let[msg, setMsg]= useState("Happy Holi!")
    // console.log("Inside the wish me")
    let incCount = ()=>{
        setCounter(counter + 1)
        // console.log("Inside the counter")
    }
    let desCount = ()=>{
        setCounter(counter - 1)
    }
  return (
    <div>
        <div>----- UI render by functional component ----</div>
            <h3>{msg}</h3>
          <button onClick={incCount}>Increment</button>
          Counter:{counter}
          <button onClick={desCount}>Decrement</button>
        </div>
  )
}

export default WishMe
