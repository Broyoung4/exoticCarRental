import { Link } from "react-router-dom";
import "./Header.css";
import {useState,useEffect} from 'react';
import car from "../../assets/car.png";
import {IconContext} from 'react-icons';
import { BsChevronDoubleRight, BsFillCheckCircleFill,BsArrowUpSquare} from "react-icons/bs";
/* 
import { motion } from 'framer-motion'; */

const Header = () => {
  const bookBtn = () => {
    document.querySelector("#book").scrollIntoView({ behavior: "smooth" });
  };
   const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };
  
  
  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 500) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []); 
  
  return (
    <div className="cr__header section__padding" id="home">
      <div className="cr__header-container">
        <div className="cr__header-container-left">
          <div className="cr__header-title">
            <h3>Experience now</h3>
            <h1 className="gradient__text">Feel the wind at your back</h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
          </div>
          <div className="cr__header-buttons">
            <Link onClick={bookBtn} className="cr__header-button" to="/">
              Book now {' '}
              <IconContext.Provider value={{className: "headerSymbol" }}>
                  <BsFillCheckCircleFill  />
                </IconContext.Provider>
            </Link>
            <button className="cr__header-button">
              <a href="#home">
                Learn more
                <IconContext.Provider value={{className: "headerSymbol" }}>
                  <BsChevronDoubleRight />
                </IconContext.Provider>
              </a>
            </button>
          </div>
        </div>

        <div className="cr__header-img">
          <img src={car} alt="img" />
        </div>
      </div>
      <div
        onClick={scrollToTop}
      >{goUp && (<IconContext.Provider value={{className: "scroll_icon" }}>
                       <div>
                        <BsArrowUpSquare />
                       </div>
                     </IconContext.Provider>
                  )}
        
      </div>
    </div>
  );
};
export default Header;
