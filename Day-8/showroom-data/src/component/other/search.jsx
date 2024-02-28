import React from "react";

const Search = () => {
  let cartypes = [
    { id: "81", category: "Hatchback" },
    { id: "82", category: "Sedan" },
    { id: "83", category: "SUV" },
    { id: "84", category: "MUV" },
    { id: "85", category: "Coupe" },
    { id: "86", category: "Convertibles" },
    { id: "87", category: "Pickup Trucks" },
  ];

  return (
    <div
      className="mx-4 my-3 px-4 py-3  bg-secondary-subtle rounded-3 d-flex align-items-center"
      style={{ width: "96%" }}
    >
      <div class="dropdown mx-5">
        <button
          class="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Category
        </button>
        <ul class="dropdown-menu">
          {cartypes.map((car, carIndex) => (
            <li key={carIndex}>
              <a class="dropdown-item" href="/">
                {car.category}
              </a>
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
