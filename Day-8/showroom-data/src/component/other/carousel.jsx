import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://fastly.picsum.photos/id/551/1000/300.jpg?hmac=kakpvZPZzYmDFXWzuvHm3oqNw3FWMjY-T4nU6HG0eYA"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fastly.picsum.photos/id/563/1000/300.jpg?hmac=hIWABLBO1jcEZVSxMmcL7EfhMDPsPW8LezYFKc8ENdk"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fastly.picsum.photos/id/549/1000/300.jpg?hmac=g4uoQm1FdEyXq02Y5qHD5bZaaKwmxJRUr5pnFWuwN1g"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
