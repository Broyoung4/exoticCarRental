import { useState } from "react";

function CarBox( {data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  /* const style = () => {
    if (carLoad) {
      return {
        display: 'none',
        opacity: 0,
        transform: 'scale(0.9)',
        transition: 'all .5s ease-in-out'
      }
    } else {
      return {
        display: 'block',
        opacity: 1,
        transform: 'scale(1)'
      }
    } 
  };*/
   //display: carLoad ? "none" : "block"
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="cr__box-cars">
          {/* car */}
          <div className="cr__pick-car">
            {carLoad && <span className="cr__loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block"  }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="cr__pick-description">
            <div className="cr__pick-description__price">
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="cr__pick-description__table">
              <div className="cr__pick-description__table__col">
                <span className='first'>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="cr__pick-description__table__col">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="cr__pick-description__table__col">
                <span>HP</span>
                <span>{car.hp}</span>
              </div>

              <div className="cr__pick-description__table__col">
                <span>Seats</span>
                <span>{car.seats}</span>
              </div>

              <div className="cr__pick-description__table__col">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="cr__pick-description__table__col">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="cr__pick-description__table__col">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#book">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
