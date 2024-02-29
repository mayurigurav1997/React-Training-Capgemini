import {useState} from "react"
let DepartmentComponent = () => {
  let departments = [
    { id: 1, dept: "Development" },
    { id: 2, dept: "Testing" },
  ];
  const [dropdownSelected, setDropdownSelected] = useState("");
  const handleSelect = (e) => {
    setDropdownSelected(e.target.value);
  };
  return (
    <select
      className="form-select"
      onChange={handleSelect}
      value={dropdownSelected}
    >
      <option key="-1">Select Department</option>
      {departments.map((item) => (
        <option>{item.dept}</option>
      ))}
    </select>
  );
  {
    /* write script to generate select box options here */
  }
};
export default DepartmentComponent;
