import React from "react";
import "./styles/worldStyle.scss";
import Buttons from "../../props/Buttons";
import worldbg from '../../../public/world-bg.png'

const World = () => {
  return (
    <div className="world">
      <div className="world__left">
        <img src={worldbg} alt="" />
      </div>
      <div className="world__right">
        <h2>A new way to explore the world </h2>
        <p>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <Buttons text="Learn more" />
      </div>
    </div>
  );
};

export default World;
