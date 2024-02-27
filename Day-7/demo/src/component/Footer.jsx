import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "India" };
  }
  render() {
    return (
      <div>
        <hr color="blue" size="5" />
        <a href="/">AboutUS</a>&nbsp;&nbsp;&nbsp;
        <a href="/">Help</a>&nbsp;&nbsp;&nbsp;
        <a href="/">Contact</a>&nbsp;&nbsp;&nbsp;
        <a href="/">Career</a>
        <address>Country: {this.state.country} - Location: {this.props.city}</address>
      </div>
    );
  }
}
