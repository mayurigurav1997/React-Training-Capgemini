import { useState } from "react";
import DepartmentComponent from "./Department";
import TechnologyComponent from "./Technology";
let EmpFormComponent = ({ employeesData, setEmployeesData }) => {
  const [dropdownSelected, setDropdownSelected] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    joindate: "",
    department: "",
    technologies: [],
    projects: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployeesData([...employeesData, formData]);
    console.log(formData,"formData")
    setFormData({
      id: "",
      firstname: "",
      lastname: "",
      joindate: "",
      department: "",
      technologies: [],
      projects: 0,
    });

  };
  return (
    <div className="card ms-2">
      <div className="card-header">
        <h3>Employee Form</h3>
      </div>
      <div className="card-body">
        <div className="row g-1 my-1">
          <div className="col-md-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control text-center"
              placeholder="first name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control text-center"
              placeholder="last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row g-1 my-1">
          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              name="joindate"
              value={formData.joindate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <DepartmentComponent formData={formData} setFormData={setFormData} handleChange={handleChange} dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected}/>
          </div>
        </div>
        <div className="row g-1 my-1">
          <div className="col-md-12">
            <p className="my-1 text-center">Select Technology</p>
            <TechnologyComponent formData={formData} setFormData={setFormData}/>
          </div>
        </div>
        <div className="row g-1 my-1">
          <div className="col-md-6">
            <p className="my-1 ms-1">Count of Completed Projects</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control text-center"
              placeholder="count"
              name="projects"
              value={formData.projects}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row g-1 my-1">
          <div className="col-md-12">
            <button
              className="btn btn-outline-primary floatend"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmpFormComponent;
