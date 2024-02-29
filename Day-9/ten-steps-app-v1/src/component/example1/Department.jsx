let DepartmentComponent = () => {
    let departments = [
    {"id":1, "dept":"Development"},
    {"id":2, "dept":"Testing"}
    ]
    return (
    <select className="form-select">
    <option key="-1">Select Department</option>
    {departments.map(item=>
    {/* write script to generate select box options here */}
    )}
    </select>
    )
   }
   export default DepartmentComponent;