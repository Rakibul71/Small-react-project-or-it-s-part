import React, { useState } from "react";
import "./Cart.css";
import Items from "./Items";
import { products } from "./Product";
import { Scrollbars } from "react-custom-scrollbars";

const Cart = () => {
  const [item, setItem] = useState(products);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            className="arrowIcon"
            src="https://raw.githubusercontent.com/thapatechnical/addtocartreact/main/public/images/arrow.png"
            alt="arrow-img"
          />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cartIcon">
          <img
            src="https://raw.githubusercontent.com/thapatechnical/addtocartreact/main/public/images/cart.png"
            alt="shopping cart"
          />
          <p>7</p>
        </div>
      </header>
      <section className="mainCartSection">
        <h1>Shopping Cart</h1>
        <p>You have {products.length} items in shopping cart</p>
        <div className="cartItems">
          <div className="cartItemsContainer">
            <Scrollbars style={{ width: 500, height: 900 }}>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
