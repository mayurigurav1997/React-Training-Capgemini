import React, { useState } from "react";

const WishMe = () => {
  let [counter, setCounter] = useState(100);
  let [msg, setMsg] = useState("Happy Holi!");
  let [fullName, setFullName] = useState({ fn: "", ln: "" });
  // console.log("Inside the wish me")
  let incCount = () => {
    setCounter(counter + 1);
    // console.log("Inside the counter")
  };
  let desCount = () => {
    setCounter(counter - 1);
  };
  let handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "fn") {
      setFullName({ ...fullName, fn: value });
    } else {
      setFullName({ ...fullName, ln: value });
    }
  };
  return (
    <div>
      <div>----- UI render by functional component ----</div>
      <h3>{msg}</h3>
      <button onClick={incCount}>Increment</button>
      Counter:{counter}
      <button onClick={desCount}>Decrement</button> <br />
      FirstName:
      <input type="text" name="fn" onChange={handleChange} /> <br />
      LastName:
      <input type="text" name="ln" onChange={handleChange} />
      <h3>
        FirstName:{fullName.fn} - LastName:{fullName.ln}
      </h3>
    </div>
  );
};

export default WishMe;
