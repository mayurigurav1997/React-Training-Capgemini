let EmployeeTableComponent = ({ employeesData }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Employee</th>
          <th>Join Date</th>
          <th>Projects</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {employeesData.map((emp, empIndex) => (
          <tr key={empIndex}>
            <td>{emp.id}</td>
            <td>
              {emp.firstname} {emp.lastname}
            </td>
            <td>{emp.joindate}</td>
            <td>{emp.projects}</td>
            <td>
              <i className="bi bi-eye-fill text-primary fs-5"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default EmployeeTableComponent;
