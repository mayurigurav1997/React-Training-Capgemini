import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Welcome to {props.companyName}</h1>
      <hr color="green" size="3"/>
    </div>
  )
}

export default Header
