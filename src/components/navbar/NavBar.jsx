import React, { useState,useEffect } from "react";
import "./navbar.css";
import tigerlogo from "../../assets/tigerlogo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = () => (
  
  <>
    <p>
      <Link href="#home" to='./'>Home</Link>
    </p>
    <p>
      <Link href="#wcr" to='./about' >About</Link>
    </p>
    <p>
      <Link href="#possibility" to='./models'>Models</Link>
    </p>
    <p>
      <Link href="#testimonials" to='./testimonials'>Testimonials</Link>
    </p>
    <p>
      <Link href="#contact" to='./contact'>Contact</Link>
    </p>
  </>
);

const NavBar = () => {
  //useState for togglez
  const [toggleMenu, setToggleMenu] = useState(false);
  const [signUp, setSignUp] = useState(false);

  // Overflow disabled for modal
  useEffect(() => {
    if (signUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [signUp]);

  const toggleSign = (e) => {
    e.preventDefault();
    setSignUp(!signUp);
    
  }

  return (
    <div className="cr__navbar gradient__bg">
      <div className="cr__navbar-links">
        <div className="cr__navbar-links_logo">
          <img src={tigerlogo} alt="logo" />
        </div>
        <div className="cr__navbar-links_container">
          <Menu />
        </div>
        <div className="cr__navbar-sign">
          <p onClick= {toggleSign}>Sign in</p>
          <button onClick= {toggleSign} type="button">Sign up</button>
        </div>
        {signUp && (<div className='cr__navbar-modal'>
          <div onClick= {toggleSign} className='cr__navbar-overlay'></div>
          <div className='cr__navbar-modal__content'>
            <h2 className="gradient__text">Log-in Page</h2>
            <form>
              <div className="cr__navbar-modal__content__form">
                <div className="cr__navbar-modal__content-email">
                  <label htmlFor="email">Email
                  </label>
                  <input type="email" name="email" id="email" placeholder="Enter your email"></input>
                </div>
                <div className="cr__navbar-modal__content-password">
                  <label htmlFor="password">Password
                  </label>
                  <input type="password" name="password" id="password" placeholder="Enter your password"></input>
                </div>
                <div className="cr__navbar-modal__content-submit">
                <button onClick= {toggleSign} type="submit" id='submitsignup'>Sign Up</button>
                  <button onClick= {toggleSign} type="submit" id='submitsignin'>Sign In</button>
                </div>
                <div className="cr__navbar-modal__content-checkbox">
                  <input type="checkbox"></input>
                  <label htlmFor="checkbox">Keep me signed in</label>
                  
                </div>
                
              </div>
            </form>
          </div>
        </div>)}
        <div className="cr__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="cr__navbar-menu_container scale-up-center">
              <div className="cr__navbar-menu_container-links">
                <Menu />
                <div className="cr__navbar-menu_container-links-sign">
                  <p onClick= {toggleSign}>Sign in</p>
                  <button onClick={toggleSign}type="button">Sign up</button>
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
