import { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnCaption: "LOGIN",
      text: "Logout",
      isLoggedIn:false
    };
  }
  render() {
    return (
      <div>
        <h3>You are {this.state.text}</h3>
        <button onClick={()=>{
            if(this.state.isLoggedIn){
                this.setState({btnCaption: "LOGOUT",
                text: "Login",
               })
            } else{
                this.setState({btnCaption: "LOGIN",
                text: "Logout",
               })
            }
            this.setState({isLoggedIn: !this.state.isLoggedIn})
        }}>{this.state.btnCaption}</button>
      </div>
    );
  }
}
