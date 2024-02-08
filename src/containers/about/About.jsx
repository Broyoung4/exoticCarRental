import './about.css';
import React from 'react';
import selectCar from '../../assets/selectCar.png';
import calloperator from '../../assets/calloperator.png';
import LetDrive from '../../assets/LetDrive.png';

const About = () => {
  return (
    <div className="cr__about section__padding">
      <div className='cr__about-container'>
        <div className='cr__about-container__title'>
          <h3>Catch Your Dream Now</h3>
          <h2>Quick & Easy Rentals</h2>
        </div>
        <div className='cr__about-container__content'>
          <div className='cr__about-container__contents'>
            <div className='cr__about-container__text-logo'>
              <img src={selectCar} alt='carimage' />
            </div>
            <div className='cr__about-container__text'>
              <h3>Select Your Car</h3>
              <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
          </div>
          <div className='cr__about-container__contents'>
            <div className='cr__about-container__text-logo'>
              <img src={calloperator} alt='operator' />
            </div>
            <div className='cr__about-container__text'>
              <h3>Call Our Operator</h3>
              <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
            </div>
          </div>
          <div className='cr__about-container__contents'>
            <div className='cr__about-container__text-logo'>
              <img src={LetDrive} alt='Drive' />
            </div>
            <div className='cr__about-container__text add__margin'>
              <h3>Let Us Drive</h3>
              <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
      }

export default About;