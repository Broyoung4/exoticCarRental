import React, {useState,useEffect} from 'react';
import './bookcar.css';
import Bugatti from "../../assets/Bugatti.png";
import BMW from "../../assets/bmwvintage.png";
import RollsRoyce from '../../assets/rollsroyce.png';
import Porsche from '../../assets/porsche.png';
import Ferrari from '../../assets/ferrari.png';
import Hummer from "../../assets/Hummerjeep.png";
import lamborghini from "../../assets/lamborghini.png";
import sportsCar from "../../assets/SportsCar.png";
import { IconContext } from 'react-icons';
import {
  AiFillCar,
  AiOutlineEnvironment,
  AiTwotoneCarryOut,
} from "react-icons/ai";
import { TbX, TbInfoCircleFilled, TbMapPinFilled } from "react-icons/tb";


//labelswithicon
const Labelled = ({ icon, text,htmlFor }) => {
  return (
    <>
      <div className="cr__bookcar-labels">
        <IconContext.Provider value={{ className: "global-class-name" }}>
          <div>{icon}</div>
        </IconContext.Provider>
        <label htmlFor={htmlFor}>{text}</label>
      </div>
    </>
  );
};

//BOOKCAR
const BookCar = () => {
  //usestates
  const[modal, setModal] = useState(false);//modalState  

  //bookingsection
  const[carType, setCarType] = useState('');
  const[pickUp, setPickUp] = useState('');
  const[dropOff, setdropOff] = useState('');
   const[pickTime, setPickTime] = useState('');
  const[dropTime, setdropTime] = useState('');
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  
  
  // handleChange
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  }
  const handlePick = (e) => {
    setPickUp(e.target.value);
  }
  const handleDrop = (e) => {
    setdropOff(e.target.value);
  }
  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  }
  const handleDropTime = (e) => {
    setdropTime(e.target.value);
  }
  

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  //hideMessage
  const hideMessage = () => {
    const done = document.querySelector('.booking-done');
    return(
      done.style.display='none'
    );
  }

  const hideError = () => {
    const err = document.querySelector('.error-message');
    return(
      err.style.display='none'
    );
  }

  // toggleModal for buttons
  const toggleModal = (e) => {
    e.preventDefault();
    const message = document.querySelector('.error-message');
    const done = document.querySelector('.booking-done');
    if (carType=== ''|| pickUp=== '' || dropOff===''|| pickTime===''|| dropTime==='') {
      message.style.display = 'block';
      setModal(false)
    }else {
    setModal(!modal);
    }
  }
  
  // Overflow disabled for modal
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  //booking done 
  const bookingDone = (e) => {
    e.preventDefault();
    const done = document.querySelector('.booking-done');
    setModal(!modal);
    done.style.display = 'flex';
  }

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "bugatti":
      imgUrl = Bugatti;
      break;
    case "rollsroyce":
      imgUrl = RollsRoyce;
      break;
    case "porsche":
      imgUrl = Porsche;
      break;
    case "ferrari":
      imgUrl = Ferrari;
      break;
    case "hummer":
      imgUrl = Hummer;
      break;
    case "lamborghini":
      imgUrl = lamborghini;
      break;
    case "sportscar":
      imgUrl = sportsCar;
      break;
    default:
      imgUrl = "";
  }
  
  return (
    <div className='cr__bookcar section__padding' id='book'>
      <div className='cr__bookcar-container'>
        <div className='cr__bookcar-title'>
          <h2>Book a car</h2>
        </div>
        <div className='cr__bookcar-messages'>
          <p className="error-message">
            All fields required!{" "}
            <IconContext.Provider value={{ className: "cancelerror" }}>
              <TbX width={20} height={20} onClick={hideError}/>
            </IconContext.Provider>
          </p>
  
          <p className="booking-done">
            Check your email to confirm an order.{" "}
            <IconContext.Provider value={{ className: "cancel" }}>
              <TbX width={20} height={20} onClick={hideMessage} />
            </IconContext.Provider>

          </p>
        </div>
        <form>
          <div className="cr__bookcar-container-form-group">
            <div className="cr__label-select">
              <Labelled icon={<AiFillCar />} text="Select your car type*" />
              <select id="referrer" name="referrer" value={carType} onChange={handleCar} required>
                <option value="">(select your preferrence)</option>
                <option value="bugatti">Bugatti </option>
                <option value="lamborghini">Lamborghini</option>
                <option value="rollsroyce">Rolls Royce</option>
                <option value="porsche">Porsche</option>
                <option value="ferrari">Ferrari</option>
                <option value="hummer">hummer</option>
                <option value="sportscar">sports car</option>
              </select>
            </div>
            <div className="cr__label-select">
              <Labelled icon={<AiOutlineEnvironment />} text="Pick up*" />
              <select value={pickUp} onChange={handlePick} name="referrer" required>
                <option value="">(select your pickup location)</option>
                <option>Lagos </option>
                <option>Delta</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
            </div>
            <div className="cr__label-select">
              <Labelled icon={<AiOutlineEnvironment />} text="Drop off*" />
              <select value={dropOff} onChange={handleDrop} name="referrer" required>
                <option value="">(select your dropoff location)</option>
                <option>Lagos </option>
                <option>Delta</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
            </div>
            <div className="cr__label-select">
              <Labelled icon={<AiTwotoneCarryOut />} text="Pick up*" />
              <input  value={pickTime}
                onChange={handlePickTime} type="date" required />
            </div>
            <div className="cr__label-select">
              <Labelled htmlFor='date' icon={<AiTwotoneCarryOut />} text="Drop off*" />
              <input value={dropTime}
                onChange={handleDropTime} type="date" id='date' required />
            </div>
            <div className="cr__label-button">
              <button type="submit" onClick={toggleModal}>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {/*modal */}
      {modal && (
      <div className='cr__bookcar-modal'>
        <div onClick={toggleModal} className='cr__bookcar-overlay'></div>
        <div className='cr__bookcar-modal-content'>
          <div className='cr__bookcar-modal-title'>
            <h2>Complete Reservation</h2>
            <IconContext.Provider value={{ className: "cancel" }}>
                <TbX onClick={toggleModal} />
            </IconContext.Provider>

          </div>
          {/* message */}
          <div className="cr__bookcar-modal__message">
            <h4>
              <TbInfoCircleFilled /> Upon completing this reservation enquiry, you
              will receive:
            </h4>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          {/* car info */}
          <div className="cr__bookcar-modal__car-info">
            <div className="dates-div">
              <div className="cr__bookcar-modal__car-info__dates">
                <h5>Location & Date</h5>
                <span>
                  <TbMapPinFilled />
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} /{" "}
                      <input type="time" className="input-time"></input>
                    </p>
                  </div>
                </span>
              </div>

              <div className="cr__bookcar-modal__car-info__dates">
                <span>
                  <TbMapPinFilled />
                  <div>
                    <h6>Drop-Off Date & Time</h6>
                    <p>
                      {dropTime} /{" "}
                      <input type="time" className="input-time"></input>
                    </p>
                  </div>
                </span>
              </div>

              <div className="cr__bookcar-modal__car-info__dates">
                <span>
                  <TbMapPinFilled />
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{pickUp}</p>
                  </div>
                </span>
              </div>

              <div className="cr__bookcar-modal__car-info__dates">
                <span>
                  <TbMapPinFilled />
                  <div>
                    <h6>Drop-Off Location</h6>
                    <p>{dropOff}</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="cr__bookcar-modal__car-info__model">
              <h5>
                <span>Car -</span> {carType}
              </h5>
              {imgUrl && <img src={imgUrl} alt="car_img" />}
            </div>
          </div>
          {/* personal info */}
          <div className="cr__bookcar-modal__person-info">
            <h4>Personal Information</h4>
            <form className="cr__info-form">
              <div className="cr__info-form__2col">
                <span>
                  <label>
                    First Name <b>*</b>
                  </label>
                  <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    placeholder="Enter your first name"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Last Name <b>*</b>
                  </label>
                  <input
                    value={lastName}
                    onChange={handleLastName}
                    type="text"
                    placeholder="Enter your last name"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>

                <span>
                  <label>
                    Phone Number <b>*</b>
                  </label>
                  <input
                    value={phone}
                    onChange={handlePhone}
                    type="tel"
                    placeholder="Enter your phone number"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Age <b>*</b>
                  </label>
                  <input
                    value={age}
                    onChange={handleAge}
                    type="number"
                    placeholder="18"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>
              </div>

              <div className="cr__info-form__1col">
                <span>
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    placeholder="Enter your email address"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Address <b>*</b>
                  </label>
                  <input
                    value={address}
                    onChange={handleAddress}
                    type="text"
                    placeholder="Enter your street address"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>
              </div>

              <div className="cr__info-form__2col">
                <span>
                  <label>
                    City <b>*</b>
                  </label>
                  <input
                    value={city}
                    onChange={handleCity}
                    type="text"
                    placeholder="Enter your city"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Zip Code <b>*</b>
                  </label>
                  <input
                    value={zipcode}
                    onChange={handleZip}
                    type="text"
                    placeholder="Enter your zip code"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>
              </div>

              <span className="cr__info-form__checkbox">
                <input type="checkbox"></input>
                <p>Please send me latest news and updates</p>
              </span>

              <div className="reserve-button">
                <button type='submit' onClick={bookingDone}>Reserve Now</button>
                
              </div>
            </form>
          </div>
        
        </div>
      </div>)}
    </div>
  )
}

export default BookCar;