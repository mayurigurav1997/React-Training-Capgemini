import React, { useState } from "react";

const Search = ({ dropdown, setDropdown }) => {
  let cartypes = [
    { id: "81", category: "Hatchback" },
    { id: "82", category: "Sedan" },
    { id: "83", category: "SUV" },
    { id: "84", category: "MUV" },
    { id: "85", category: "Coupe" },
    { id: "86", category: "Convertibles" },
    { id: "87", category: "Pickup Trucks" },
  ];
  const handleDropdown = (category) => {
    setDropdown(category);
  };

  return (
    <div
      className="mx-4 my-3 px-4 py-3  bg-secondary-subtle rounded-3 d-flex align-items-center"
      style={{ width: "96%" }}
    >
      <div className="dropdown mx-5 d-flex align-items-center">
        <button
          className="btn btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-funnel-fill me-1 fs-5"></i>
          {dropdown ? dropdown : "Select Category"}
        </button>
        <ul className="dropdown-menu">
          {cartypes.map((car, carIndex) => (
            <li key={carIndex}>
              <button
                className="dropdown-item"
                onClick={() => handleDropdown(car.category)}
              >
                {car.category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="input-group-sm">
        <input
          type="text"
          placeholder="company/model"
          className="form-control"
        />
      </div>
      <button className="btn btn-sm btn-dark mx-3">Search</button>
    </div>
  );
};

export default Search;
