let EmployeeTableComponent = () => {
  let employees = [
    {
      id: 1,
      firstname: "Smith",
      lastname: "Mathew",
      joindate: "09/Jan/2021",
      department: "Development",
      technologies: [
        { id: 1, domain: "Java Spring Boot" },
        { id: 4, domain: "Asp.Net MVC" },
      ],
      projects: 3,
    },
    {
      id: 2,
      firstname: "Maria",
      lastname: "Garcia",
      joindate: "09/Oct/2019",
      department: "Development",
      technologies: [
        { id: 1, domain: "Java Spring Boot" },
        { id: 2, domain: "Python Django" },
      ],
      projects: 8,
    },
    {
      id: 3,
      firstname: "Jacob",
      lastname: "Abraham",
      joindate: "21/Mar/2021",
      department: "Testing",
      technologies: [{ id: 3, domain: "Express Js" }],
      projects: 1,
    },
    {
      id: 4,
      firstname: "Jessica",
      lastname: "Antoine",
      joindate: "18/Aug/2021",
      department: "Development",
      technologies: [
        { id: 1, domain: "Java Spring Boot" },
        { id: 4, domain: "Asp.Net MVC" },
      ],
      projects: 11,
    },
  ];
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
        {employees.map((emp) => (
          <tr>
            <td>{emp.id}</td>
            <td>
              {emp.firstname} {emp.lastname}
            </td>
            <td>{emp.joindate}</td>
            <td>{emp.projects}</td>
            <td><i class="bi bi-eye-fill text-primary fs-5"></i></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default EmployeeTableComponent;
