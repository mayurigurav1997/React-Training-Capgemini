import React from "react";

const Header = () => {
  return (
    <div
      style={{ height: "8vh" }}
      className="z-3 w-100 d-flex flex-row align-items-center justify-content-between bg-secondary-subtle position-sticky top-0"
    >
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <a href="/">AUTO WORLD</a>
        </li>
        <li className="list-group-item">
          <a href="/">Offers</a>
        </li>
        <li className="list-group-item">
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <button className="btn btn-secondary mx-5 btn-sm">Signup</button>
    </div>
  );
};

export default Header;
