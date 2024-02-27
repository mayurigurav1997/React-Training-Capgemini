import React from 'react'
import Login from './Login'
import Log from './Log'

const Header = (props) => {
  return (
    <div>
      <h1>Welcome to {props.companyName}</h1>
      <Login />
      <hr color="green" size="3"/>
      <Log />
    </div>
  )
}

export default Header
