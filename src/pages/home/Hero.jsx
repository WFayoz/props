import React from "react";
import "./styles/heroStyle.scss";
import Buttons from "../../props/Buttons";
import heroBg from '../../../public/bg-hero.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__left--top">
          <h2>Explore and Travel</h2>
          <p>Holiday finder</p>
          <div className="line"></div>
        </div>
        <form action="" className="hero__left--bottom">
          <div className="options">
            <select name="" id="">
              <option value="">Location</option>
              <option value="">smth</option>
            </select>
            <select name="" id="">
              <option value="">Activity</option>
              <option value="">smth</option>
            </select>
            <select name="" id="">
              <option value="">Grade</option>
              <option value="">smth</option>
            </select>
            <select name="" id="">
              <option value="">Date</option>
              <option value="">smth</option>
            </select>
          </div>
          <Buttons text="Explore" />
        </form>
      </div>
      <div className="hero__right">
        <img src={heroBg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
