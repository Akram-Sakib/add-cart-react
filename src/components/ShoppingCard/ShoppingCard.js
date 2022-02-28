import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ShoppingCard.css";
import {  faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;

const ShoppingCard = (props) => {

  const { name, age, profession, img, salary,address } = props.users;

  return (
    <div className="card">
      <img src={img} alt="#" />
      <ul className="nameField">
        <li>
          <span>Name:</span> {name}
        </li>
        <li>
          <span>Role:</span> {profession}
        </li>
        <li>
          <span>Age:</span> {age}
        </li>
        <li>
          <span>Country:</span> {address}
        </li>
        <li>
          <span>Salary:</span> ${salary}
        </li>
      </ul>
      <button onClick={() => props.handleAddToCart(props.users)}>Add To Cart</button>
      <div className="socialIcon">
        {facebook}
        {twitter}
      </div>
    </div>
  );
};

export default ShoppingCard;
