let CardComponent = ({employeesData}) => {
  const projects = employeesData.reduce((sum,emp)=>{
    return emp.projects + sum
  },0)
  return (
    <div className="row g-2">
      <div className="col-md-3">
        <div className="card m-2 p-2 shadow">
          <p className="fw-bold text-center">Total Employees</p>
          <h2 className="text-center">{employeesData.length}</h2>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card m-2 p-2 shadow">
          <p className="fw-bold text-center">Departments</p>
          <h2 className="text-center">2</h2>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card m-2 p-2 shadow">
          <p className="fw-bold text-center">Technologies</p>
          <h2 className="text-center">4</h2>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card m-2 p-2 shadow">
          <p className="fw-bold text-center">Projects</p>
          <h2 className="text-center">{projects}</h2>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
