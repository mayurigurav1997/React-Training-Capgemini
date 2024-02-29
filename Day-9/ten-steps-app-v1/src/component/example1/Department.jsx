import { useState } from "react";
let DepartmentComponent = ({
  formData,
  handleChange,
  setFormData,
  dropdownSelected,
  setDropdownSelected,
}) => {
  let departments = [
    { id: 1, dept: "Development" },
    { id: 2, dept: "Testing" },
  ];

  const handleSelect = (e) => {
    setDropdownSelected(e.target.value);
  };
  return (
    <select
      className="form-select"
      //   onChange={handleSelect}
      //   value={dropdownSelected}
      name="department"
      value={formData.department}
      onChange={handleChange}
    >
      <option key="-1">Select Department</option>
      {departments.map((item, index) => (
        <option key={index}>{item.dept}</option>
      ))}
    </select>
  );
  {
    /* write script to generate select box options here */
  }
};
export default DepartmentComponent;
