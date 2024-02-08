import './reviews.css';
import { TbQuote } from "react-icons/tb";
import Img2 from "../../assets/pfp1.jpg";
import Img3 from "../../assets/pfp2.jpg";

function Reviews() {
  return (
      <div className="cr__reviews section__padding">
        <div className="cr__reviews-container">
          <div className="cr__reviews-content">
            <div className="cr__reviews-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Reviews</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their reviews. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="cr__all-reviews">
              <div className="cr__all-reviews__box">
                <span className="quotes-icon">
                  <TbQuote width={60} height={60} />
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="cr__all-reviews__box__name">
                  <div className="cr__all-reviews__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Jason Staham</h4>
                      <p>Russia</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="cr__all-reviews__box box-2">
                <span className="quotes-icon">
                  <TbQuote  width={60} height={60} />
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="cr__all-reviews__box__name">
                  <div className="cr__all-reviews__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Dwayne Jude</h4>
                      <p>Denmark</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Reviews;
