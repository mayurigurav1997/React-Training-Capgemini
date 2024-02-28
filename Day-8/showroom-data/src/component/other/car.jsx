import React from "react";
import carsData from "../../carsData.js";

const Car = () => {
  console.log(carsData);
  return (
    <div className="mx-5 d-flex flex-wrap mb-4 border border-light-subtle">
      {carsData.map((car, carIndex) => {
        return (
          <div
            className="card mx-3 my-3 d-flex flex-column"
            style={{ width: "16rem", height: "30rem" }}
          >
            <div className="d-flex justify-content-between px-1 my-1">
              <span>{car.date}</span>
              <a href="#" class="card-link">
                Reviews {car.reviews}
              </a>
            </div>
            <div className="my-3 px-1">
              <h5 className="text-danger d-inline">{car.carname} </h5>
              <h5 className="text-secondary d-inline">({car.type})</h5>
            </div>

            <img src={car.image} className="card-img-top" alt="..." />
            <div className="card-body py-1">
              <div className="d-flex ">
                <div className="me-5">
                  <h6 className="my-1">Mileage</h6>
                  <h6 className="text-secondary my-1 ">{car.mileage}</h6>
                </div>
                <div>
                  <h6 className="my-1">Location</h6>
                  <h6 className="text-secondary my-1 ">{car.location}</h6>
                </div>
              </div>

              <div className="d-flex my-3">
                <div className="me-5">
                  <h6 className="my-1">Engine</h6>
                  <h6 className="text-secondary my-1 ">{car.engine}</h6>
                </div>
                <div>
                  <h6 className="my-1">Transmission</h6>
                  <h6 className="text-secondary my-1 ">{car.transmission}</h6>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="text-success">{car.price}</h5>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Car;
