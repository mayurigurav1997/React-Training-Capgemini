import React, { Component } from "react";

export default class GreetMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
      message: "Happy Birthday",
      cityList: ["Pune", "Mumbai", "Delhi", "Chennai"],
      empList: [{ empId: 111, empName: "Mayuri",empSalary:"20k" },{ empId: 222, empName: "Rushikesh",empSalary:"18k" },{ empId: 333, empName: "Shivani",empSalary:"22k" },{ empId: 444, empName: "Shubham",empSalary:"25k" },],
    };
    this.incCount = this.incCount.bind(this);
  }
  incCount() {
    this.setState({ counter: this.state.counter + 1 });
  }
  desCount = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    let newCityList = this.state.cityList.map((city, cityIndex) => {
      return <li key={cityIndex}>{city}</li>;
    });
    let newEmpList = this.state.empList.map((emp, empIndex) => {
      return (
        <tr key={empIndex}>
          <td>{emp.empId}</td>
          <td>{emp.empName}</td>
          <td>{emp.empSalary}</td>
        </tr>
      );
    });
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.incCount}>Increment</button>
        Counter:{this.state.counter}
        <button onClick={this.desCount}>Decrement</button>
        <p>Capgemini's Location</p>
        {newCityList}
        <p>Emp Details</p>
        <table border="1">
          <thead>
           <tr>
           <th>EMPID</th>
            <th>EMPNAME</th>
            <th>EMPSAL</th>
           </tr>
          </thead>
          <tbody>
            {newEmpList}
          </tbody>
        </table>
      </div>
    );
  }
}
