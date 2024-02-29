

let DepartmentComponent = () => {
    let departments = [
        {"id":1, "dept":"Development"},
        {"id":2, "dept":"Testing"}
    ]
    return (
        <select className="form-select">
            <option key="-1">Select Department</option>
            {departments.map(item=>
                <option key={item.id}>{item.dept}</option>
            )}
        </select>
    )
}

export default DepartmentComponent;