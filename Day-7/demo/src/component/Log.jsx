import React, { useState } from 'react'

const Log = () => {
    const[btnCaption, setBtnCaption] = useState("Login")
    const [text,setText]= useState("Logout")
    let [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        <h3>Yue are {text}</h3>
        <button onClick={()=>{
            if(isLoggedIn){
                setText("Login")
                setBtnCaption("Logout")
            }else{
                setText("Logout")
                setBtnCaption("Login")
            }
            setIsLoggedIn(!isLoggedIn)
        }}>{btnCaption}</button>
      
    </div>
  )
}

export default Log
