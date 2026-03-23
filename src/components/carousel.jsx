import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarCarousel = ({ cars }) => {
  // Show only top 5 cars (or adjust)
  const featuredCars = cars.slice(0, 5);

  return (
    <Carousel>
      {featuredCars.map((car) => (
        <Carousel.Item key={car.id}>
          <img
            className="d-block w-100"
            src={`https://vincentfungo.alwaysdata.net/static/images/${car.car_photo}`}
            alt={car.car_name}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{car.car_name}</h3>
            <p>Ksh {car.car_cost}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarCarousel;