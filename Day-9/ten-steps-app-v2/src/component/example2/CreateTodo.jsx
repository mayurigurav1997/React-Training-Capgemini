import { useEffect, useState } from "react";

let CreateTodoComponent = ({ emplist, status, todolist, setToDoList }) => {
  const [filterList, setFilterList] = useState(todolist);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    startdate: "",
    enddate: "",
    status: "",
    employees: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const empId = todolist.length + 1;
    setFormData({
      ...formData,
      id: empId,
      [name]: value,
    });
  };
  const handleCheckbox = (e) => {
    console.log(e.target.name, "name");
    const name = e.target.name;
    const nameObj = emplist.filter((emp) => name === emp.empname);
    console.log(nameObj);
    if (e.target.checked) {
      setFormData({
        ...formData,
        employees: [...formData.employees, nameObj[0]],
      });
    }
  };

  let create = (event) => {
    // TODO: Define function to create new task and save to tasklist
    event.preventDefault();
    setToDoList((prev) => [...prev, formData]);
    setFilterList((prev) => [...prev, formData]);
  };
  useEffect(() => {
    // setCopyTodo([...todolist])

    console.log(filterList, "filterList");
  }, [filterList]);
  let changeTodoStatus = (event) => {
    // TODO: Define function to change status for selected Task
  };

  let removeTodoItem = (event) => {
    // TODO: Define function to delete selected task from todo list.
  };

  let refreshTodoTable = (event) => {
    // TODO: Define function to refresh todo list table.
  };

  const [seachTaskId, setSearchTaskId] = useState("");

  let searchItem = (event) => {
    // TODO: Define function to search item in table either by id or by title
    const { value } = event.target;
    console.log(value);
    setSearchTaskId(value);
    if (value) {
      const filtered = todolist.filter(
        (todo) => todo?.title?.includes(value) || `${todo.id}` == value
      );
      setFilterList(filtered);
    } else {
      setFilterList([...todolist]);
    }
  };

  const [searchStatus, setSearchStatus] = useState("");
  let filterByStatus = (event) => {
    // TODO: Define function to filter table rows matching to selected status
    const { value } = event.target;
    console.log(value);
    setSearchStatus(value);
    if (value) {
      const filtered = todolist.filter((todo) => todo.status === value);
      setFilterList(filtered);
    } else {
      setFilterList([...todolist]);
    }
  };

  const [searchEmployee, setSearchEmployee] = useState("");
  let filterByEmployee = (event) => {
    // TODO: Define function to filter table rows matching to selected employee
    const { value } = event.target;
    setSearchEmployee(value);
    if (value) {
      const filtered = todolist.filter((todo) =>
        todo.employees.find((emp) => emp.empname === value)
      );
      setFilterList(filtered);
    } else {
      setFilterList([...todolist]);
    }
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
            {emplist.map((item, index) => (
              <div className="col-md-2" key={index}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.empname}
                  className="form-check-input"
                  name={item.empname}
                  onChange={handleCheckbox}
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
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3">
              <p className="fw-bold m-0">Start Date</p>
              <input
                type="date"
                className="form-control"
                name="startdate"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3">
              <p className="fw-bold m-0">End Date</p>
              <input
                type="date"
                className="form-control"
                name="enddate"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3">
              <p className="fw-bold m-0">Status</p>
              <select
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="-1">Select</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
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
                value={seachTaskId}
                onChange={searchItem}
              />
            </div>

            <div className="col-md-3">
              {" "}
              <>
                {
                  <select
                    className="form-select"
                    value={searchStatus}
                    onChange={filterByStatus}
                  >
                    <option value="">Select</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                }
              </>
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={searchEmployee}
                onChange={filterByEmployee}
              >
                <option key="" value="">Select</option>
                {emplist.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.empname}
                  </option>
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
              {filterList.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.status == "New" ? (
                      <i className="fa-solid fa-square text-danger"></i>
                    ) : item.status == "In Progress" ? (
                      <i className="fa-solid fa-square text-primary"></i>
                    ) : (
                      <i className="fa-solid fa-square text-success"></i>
                    )}
                  </td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.startdate}</td>
                  <td>{item.enddate}</td>
                  <td>
                    {item.employees.map((e, i) => (
                      <span key={i} className="badge bg-dark mx-2">
                        {e.empname}
                      </span>
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
        tabIndex="-1"
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
