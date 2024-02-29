import { useState } from "react";

let CreateTodoComponent = ({ emplist, status, todolist, setToDoList }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    startdate: "",
    enddate: "",
    status: "",
    employees: [],
  });
  const handleChange =(e)=>{
    const {name,value} = e.target;
    const empId = todolist.length +1
    setFormData({
        ...formData,
        [name]: value,
        id:empId
    })
  }

  let create = (event) => {
    // TODO: Define function to create new task and save to tasklist
    event.preventDefault();
    setToDoList([...todolist, formData]);
  };

  let changeTodoStatus = (event) => {
    // TODO: Define function to change status for selected Task
  };

  let removeTodoItem = (event) => {
    // TODO: Define function to delete selected task from todo list.
  };

  let refreshTodoTable = (event) => {
    // TODO: Define function to refresh todo list table.
  };

  let searchItem = (event) => {
    // TODO: Define function to search item in table either by id or by title
  };

  let filterByStatus = (event) => {
    // TODO: Define function to filter table rows matching to selected status
  };

  let filterByEmployee = (event) => {
    // TODO: Define function to filter table rows matching to selected employee
  };

  return (
    <div className="p-1">
      <h1 style={{ color: "darkblue", textAlign: "center" }}>Props & Events</h1>

      <div className="card shadow m-3">
        <div className="card-body">
          <p className="text-secondary">
            *Note - select employee(s) to whome you want to assign new task
          </p>

          <div className="row m-2">
            <p className="fw-bold m-0">Select Employee(s)</p>
            {emplist.map((item) => (
              <div className="col-md-2">
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.empname}
                  className="form-check-input"
                />
                <label className="mx-2" htmlFor={item.id}>
                  {item.empname}
                </label>
              </div>
            ))}
          </div>

          <div className="row m-2">
            <div className="col-md-3">
              <p className="fw-bold m-0">Task title</p>
              <input type="text" className="form-control" name="title" onChange={handleChange}/>
            </div>

            <div className="col-md-3">
              <p className="fw-bold m-0">Start Date</p>
              <input type="date" className="form-control" name="startdate" onChange={handleChange}/>
            </div>

            <div className="col-md-3">
              <p className="fw-bold m-0">End Date</p>
              <input type="date" className="form-control" name="enddate" onChange={handleChange}/>
            </div>

            <div className="col-md-3">
              <p className="fw-bold m-0">Status</p>
              {status}
            </div>
          </div>
        </div>

        <div className="card-footer">
          <button className="btn btn-success float-end mx-3" onClick={create}>
            Create Todo
          </button>
        </div>
      </div>

      <div className="card shadow m-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <input
                type="search"
                className="form-control"
                placeholder="taskid/title"
              />
            </div>

            <div className="col-md-3">{status}</div>

            <div className="col-md-3">
              <select className="form-select">
                <option key="-1">Select</option>
                {emplist.map((item) => (
                  <option key={item.id}>{item.empname}</option>
                ))}
              </select>
            </div>
          </div>
          <table className="table table-hover mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>Task #Id</th>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Assigned To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todolist.map((item) => (
                <tr>
                  <td>
                    {item.status == "New" ? (
                      <i class="fa-solid fa-square text-danger"></i>
                    ) : item.status == "In Progress" ? (
                      <i class="fa-solid fa-square text-primary"></i>
                    ) : (
                      <i class="fa-solid fa-square text-success"></i>
                    )}
                  </td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.startdate}</td>
                  <td>{item.enddate}</td>
                  <td>
                    {item.employees.map((e) => (
                      <span className="badge bg-dark mx-2">{e.empname}</span>
                    ))}
                  </td>
                  <td>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Selected Task Id : null
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <p className="fw-bold text-secondary"></p>

                  <p className="fw-bold">Change Status</p>
                  {status}
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12">
                  <button className="btn btn-success" data-bs-dismiss="modal">
                    Save Changes
                  </button>
                  <button
                    className="btn btn-danger float-end"
                    data-bs-dismiss="modal"
                  >
                    Delete this task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodoComponent;
