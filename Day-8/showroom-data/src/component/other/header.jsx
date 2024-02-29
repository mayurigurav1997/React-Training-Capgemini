import React from "react";

const Header = () => {
  return (
    <div
      style={{ height: "8vh" }}
      className="z-3 w-100 d-flex flex-row align-items-center justify-content-between bg-secondary-subtle position-sticky top-0"
    >
      <ul className="horizontal-list mb-0">
        <button
          className="btn text-secondary btn-sm mx-1 d-flex flex-row align-items-center"
          style={{}}
        >
          <i className="bi bi-car-front-fill me-1 fs-5"></i>
          Auto World
        </button>
        <button className="btn text-secondary btn-sm mx-1 d-flex flex-row align-items-center">
          <i className="bi bi-gift-fill me-1 fs-6"></i>Offers
        </button>
        <button className="btn text-secondary btn-sm mx-1 d-flex flex-row align-items-center">
          <i className="bi bi-headset me-1 fs-5"></i>ContactUs
        </button>
      </ul>
      <button className="btn btn-dark mx-5 btn-sm">Signup</button>
    </div>
  );
};

export default Header;
