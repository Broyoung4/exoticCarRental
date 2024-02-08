import './models.css';
import {Footer} from "../../containers";
import HeroPages from "../../components/heropages/HeroPages";
import CarImg1 from "../../assets/Bugatti.png";
import CarImg2 from "../../assets/Hummerjeep.png";
import CarImg3 from "../../assets/lamborghini.png";
import CarImg4 from "../../assets/porsche.png";
import CarImg5 from "../../assets/rollsroyce.png";
import CarImg6 from "../../assets/SportsCar.png";
import { Link } from "react-router-dom";
import { TbCar, TbPhone, TbStar } from "react-icons/tb";

function Models() {
  return (
    <>
      <section className="cr__models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="cr__models-div  section__padding">
            <div className="cr__models-div__box">
              <div className="cr__models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="cr__models-div__box__descr">
                  <div className="cr__models-div__box__descr__name-price">
                    <div className="cr__models-div__box__descr__name-price__name">
                      <p>Bugatti Veyron</p>
                      <span>
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="cr__models-div__box__descr__name-price__price">
                      <h4>$25,000</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__details">
                    <span>
                      <TbCar /> &nbsp; Bugatti
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 seater &nbsp; <TbCar />
                    </span>
                    <span>
                      <TbCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Gasoline &nbsp; <TbCar />
                    </span>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="cr__models-div__box">
              <div className="cr__models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="cr__models-div__box__descr">
                  <div className="cr__models-div__box__descr__name-price">
                    <div className="cr__models-div__box__descr__name-price__name">
                      <p>Cadillac Escalade</p>
                      <span>
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="cr__models-div__box__descr__name-price__price">
                      <h4>$595</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__details">
                    <span>
                      <TbCar /> &nbsp; Cadillac
                    </span>
                    <span style={{ textAlign: "right" }}>
                      7 seater &nbsp; <TbCar />
                    </span>
                    <span>
                      <TbCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Gasoline &nbsp; <TbCar />
                    </span>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="cr__models-div__box">
              <div className="cr__models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="cr__models-div__box__descr">
                  <div className="cr__models-div__box__descr__name-price">
                    <div className="cr__models-div__box__descr__name-price__name">
                      <p>Lamborghini Aventador SV</p>
                      <span>
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="cr__models-div__box__descr__name-price__price">
                      <h4>$2,995</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__details">
                    <span>
                      <TbCar /> &nbsp; Lambo
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 seater &nbsp; <TbCar />
                    </span>
                    <span>
                      <TbCar /> &nbsp; Automatic
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Gasoline &nbsp; <TbCar />
                    </span>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="cr__models-div__box">
              <div className="cr__models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="cr__models-div__box__descr">
                  <div className="cr__models-div__box__descr__name-price">
                    <div className="cr__models-div__box__descr__name-price__name">
                      <p>Porsche 911 GTS</p>
                      <span>
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="cr__models-div__box__descr__name-price__price">
                      <h4>$695</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__details">
                    <span>
                      <TbCar /> &nbsp; Porsche
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 seater &nbsp; <TbCar />
                    </span>
                    <span>
                      <TbCar /> &nbsp; Automatic
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Hybrid &nbsp; <TbCar />
                    </span>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="cr__models-div__box">
              <div className="cr__models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="cr__models-div__box__descr">
                  <div className="cr__models-div__box__descr__name-price">
                    <div className="cr__models-div__box__descr__name-price__name">
                      <p>Rolls Royce Phantom</p>
                      <span>
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="cr__models-div__box__descr__name-price__price">
                      <h4>$1,995</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__details">
                    <span>
                      <TbCar /> &nbsp; Rolls Royce
                    </span>
                    <span style={{ textAlign: "right" }}>
                      5 seater &nbsp; <TbCar />
                    </span>
                    <span>
                      <TbCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Gasoline &nbsp; <TbCar />
                    </span>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="cr__models-div__box">
              <div className="cr__models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="cr__models-div__box__descr">
                  <div className="cr__models-div__box__descr__name-price">
                    <div className="cr__models-div__box__descr__name-price__name">
                      <p>Mercedes Gt</p>
                      <span>
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                        <TbStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="cr__models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__details">
                    <span>
                      <TbCar /> &nbsp; Mercedes
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <TbCar />
                    </span>
                    <span>
                      <TbCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <TbCar />
                    </span>
                  </div>
                  <div className="cr__models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <TbPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
