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
    <div className="mx-4 my-3 px-4 py-2  bg-secondary-subtle rounded-3" style={{width:"96%"}}>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          {cartypes.map((car, carIndex) => (
            <li>
              <a class="dropdown-item" href="#">
                {car.category}
              </a>
            </li>
          ))}        
        </ul>
      </div>
    </div>
  );
};

export default Search;
