import './chooseus.css';
import MainAd from "../../assets/rolls-royceBG.jpg";
import Box1 from "../../assets/icon1.png";
import Box2 from "../../assets/icon2.png";
import Box3 from "../../assets/icon3.png";
import { TbChevronRight } from "react-icons/tb";

function ChooseUs() {
  return (
      <div className="cr__choose section__padding">
        <div className="cr__container">
          <div className="cr__choose-container">
            <img
              className="cr__choose-container__img"
              src={MainAd}
              alt="car_img"
            />
            <div className="cr__choose-text-container">
              <div className="cr__choose-text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <TbChevronRight />
                </a>
              </div>
              <div className="cr__choose-text-container__right">
                <div className="cr__choose-text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="cr__choose-text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="cr__choose-text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="cr__choose-text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="cr__choose-text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="cr__choose-text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ChooseUs;
