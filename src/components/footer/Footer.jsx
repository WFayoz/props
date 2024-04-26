import React from "react";
import "./footerStyle.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <circle cx="22" cy="22" r="22" fill="#1ABE84" />
          <circle
            cx="22"
            cy="22"
            r="9.54878"
            fill="#FB8F1D"
            stroke="white"
            stroke-width="3"
          />
        </svg>
        <p className="footer__des">
          Plan and book your perfect trip with expert advice, travel tips
          destination information from us
        </p>
        <p className="footer__date">
          ©2020 Thousand Sunny. All rights reserved
        </p>
      </div>
      <ul className="footer__list">
        <h3>Destinations</h3>
        <li>Africa</li>
        <li>Antarctica</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>America</li>
      </ul>
      <ul className="footer__list">
        <h3>Shop</h3>
        <li>Destination Guides</li>
        <li>Pictorial & Gifts</li>
        <li>Special Offers </li>
        <li>Delivery Times</li>
        <li>FAQs</li>
      </ul>
      <ul className="footer__list">
        <h3>Interests</h3>
        <li>Adventure Travel</li>
        <li>Art And Culture</li>
        <li>Wildlife And Nature</li>
        <li>Family Holidays</li>
        <li>Food And Drink</li>
      </ul>
    </div>
  );
};

export default Footer;
