import React,{Component} from 'react'

export default class GreetMe extends Component{
  constructor(props){
    super(props)
    this.state={
        counter:10,
        message:"Happy Birthday"
    }
    this.incCount = this.incCount.bind(this);
  }
 incCount(){
     this.setState({counter:this.state.counter+1})
  }
  desCount = () =>{
    this.setState({counter:this.state.counter-1})
  }
   render(){
    return (
        <div>
            <h3>{this.state.message}</h3>
          <button onClick={this.incCount}>Increment</button>
          Counter:{this.state.counter}
          <button onClick={this.desCount}>Decrement</button>
        </div>
      )
   }
}


