import React, { useEffect, useState } from "react";
import ResultCart from "../ResultCart/ResultCart";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import "./Shop.css";

const Shop = () => {
  const [users, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddToCart = (user) => {
    console.log(user);
    const newCart = [...cart, user];
    setCart(newCart);
  };

  return (
    <div className="shop">
      <div className="shopCard">
        {users.map((data) => (
          <ShoppingCard
            handleAddToCart={handleAddToCart}
            users={data}
            key={data.id}
          ></ShoppingCard>
        ))}
      </div>
      <ResultCart users={users} cart={cart}></ResultCart>
    </div>
  );
};

export default Shop;
