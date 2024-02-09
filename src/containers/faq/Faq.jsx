import './faq.css';
import { TbChevronDown } from "react-icons/tb";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "cr__active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "cr__active-question" : "";
  };

  return (
    <>
      <div className="cr__faq section__padding">
        <div className="container">
          <div className="cr__faq-content">
            <div className="cr__faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="cr__all-questions">
              <div className="cr__faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`cr__faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. What is special about comparing rental car deals?</p>
                  <TbChevronDown />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`cr__faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>
              <div className="cr__faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`cr__faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. How do I find the car rental deals?</p>
                  <TbChevronDown />{" "}
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`cr__faq-box__answer ${getClassAnswer("q2")}`}
                >
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </div>
              </div>
              <div className="cr__faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`cr__faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How do I find such low rental car prices?</p>
                  <TbChevronDown />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`cr__faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
