import './App.css';
import React, { useState } from "react"

function App() {
  const [empArr, setEmpArr] = useState([{
    "empId": "4",
    "empName": "cbhi",
    "empSal": "4"
  },
  {
    "empId": "5",
    "empName": "eaaa",
    "empSal": "5555"
  },
  {
    "empId": "7",
    "empName": "bbb",
    "empSal": "7"
  }])
  const [choice, setChoice] = useState("")
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [salary, setSalary] = useState("")
  const [searchFlag, setSearchFlag] = useState(false)
  const handleChoice = (e) => {
    setChoice(e.target.value)
    // console.log(choice)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "id") {
      setId(value)
    } else if (name === "name") {
      setName(value)
    } else if (name === "salary") {
      setSalary(value)
    }
  }

  const handleClick = () => {
    if (!choice) {
      alert("Enter the choice")
      return;
    }
    if (choice === "1") {
      if (!(id && name && salary)) {
        alert("Please Enter all fields")
        return;
      }
      setEmpArr([...empArr, { empId: id, empName: name, empSal: salary }])
    } else if (choice === "2") {
      if (!(id && name && salary)) {
        alert("Please Enter all fields")
        return;
      }
      let newArray = empArr.map((emp, index) => emp.empName === name ? { empId: id, empName: name, empSal: salary } : emp
      )
      setEmpArr(newArray)
    } else if (choice === "3") {
      if (!name) {
        alert("Please Enter the Name to Search")
        return;
      }
      const flag = empArr.some((emp) => emp.empName === name)
      setSearchFlag(flag)
      if (!flag) {
        alert("employee is not there")
        return
      }
    } else if (choice === "4") {
      if (!name) {
        alert("Please Enter the Name to Delete")
        return;
      }
      const newArray = empArr.filter(emp => emp.empName !== name)
      setEmpArr(newArray)
    } else if (choice === "5") {
      empArr.sort((a, b) => a.empName.localeCompare(b.empName))
      setEmpArr(empArr.sort((a, b) => a.empName.localeCompare(b.empName)))
      console.log(empArr)
    }
  }


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
          </tr>
        </thead>
        <tbody>
          {empArr.map((emp, empIndex) => {
            return (
              <tr key={empIndex}>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.empSal}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <ol type="1">
        <li>Add</li>
        <li>Update</li>
        <li>Search</li>
        <li>Delete</li>
        <li>Sort</li>
        {/* Add/Update/Search/Delete/Sort  */}
      </ol>
      <div className="input-box">
        <span >Enter your choice:</span>
        <input type="text" value={choice} onChange={handleChoice} />
      </div>
      <div className="input-box">
        <span >Emp Id:</span>
        <input type="text" name="id" value={id} onChange={handleChange} />
      </div>
      <div className="input-box">
        <span >Emp Name:</span>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div className="input-box">
        <span >Emp Salary:</span>
        <input type="text" name="salary" value={salary} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Submit</button>

      {searchFlag && <p>Employee is there</p>}
    </div>
  );
}

export default App;
