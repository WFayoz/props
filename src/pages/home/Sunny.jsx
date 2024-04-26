import React from "react";
import "./styles/sunnyStyle.scss";
import Buttons from "../../props/Buttons";
import sunnybg from '../../../public/sunny-bg.png'

const Sunny = () => {
  return (
    <div className="sunny">
      <div className="sunny__left">
        <h3>Guides by Thousand Sunny</h3>
        <p>
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>
        <Buttons text="Download" />
      </div>
      <div className="sunny__right">
        <img src={sunnybg} alt="bg" />
      </div>
    </div>
  );
};

export default Sunny;
