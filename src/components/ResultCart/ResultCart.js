import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ResultCart.css";

const element = <FontAwesomeIcon icon={faUser} />;

const ResultCart = (props) => {
  const { cart, personName } = props;
  let total = 0;
  for (const user of cart) {
    total += user.salary;
  }

  return (
    <div className="resultCart">
      <h2>
        {element} Players Added: {cart.length}
      </h2>
      <h2>Total Cost: ${total}</h2>

      {<h6>{ personName }</h6>}
      <button className="">Buy Now</button>
    </div>
  );
};

export default ResultCart;
