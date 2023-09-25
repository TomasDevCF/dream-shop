import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";

//Hooks

export function Headers({ isCart = false }) {
  const [cartActive, setCartActive] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  function removeItem(itemID) {
    const newCart = cart.filter((item) => item.id !== itemID);
    setCart(newCart);
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let price = 0;

    for (let i = 0; i < cart.length; i++) {
      price = price + cart[i].price;
    }
    setTotal(price);
  }, [cart]);

  return (
    <header>
      <div className="left">
        <Link to="/" className="links">
          <h1>Dream Shop</h1>
        </Link>
      </div>
      <div className="medium">
        <div className="search">
          <span className="bi bi-search"></span>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.location.href = `/search?q=${e.target.value}`;
              }
            }}
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="right">
        <h1>
          <span
            onClick={() => {
              setCartActive(!cartActive);
            }}
            className="bi bi-cart2"
          ></span>
        </h1>
        <div className="cart-list">
          <div className={!cartActive ? "unActive all-list" : "all-list"}>
            <div className="product-cart">
              {cart ? (
                cart.map((obj) => {
                  return (
                    <div className="product-l">
                      <img src={obj.image} alt="Product" />
                      <div className="center-l">
                        <p style={{ fontWeight: "bold" }}>{obj.name}</p>
                        <p>
                          {obj.price * obj.units}{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "rgb(33, 174, 33)",
                            }}
                          >
                            $
                          </span>
                        </p>
                      </div>
                      <div className="close-l">
                        <span
                          onClick={() => removeItem(obj.id)}
                          className="bi bi-x"
                        ></span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1>Add a product to the cart!</h1>
              )}
            </div>
            <div className="total-price">
              <h4>Total:</h4>
              <h3>
                {total}{" "}
                <span style={{ fontWeight: "bold", color: "rgb(33, 174, 33)" }}>
                  $
                </span>
              </h3>
            </div>
          </div>
        </div>
        {isCart ? (
          <div className="red-point">
            <p>1</p>
          </div>
        ) : null}
      </div>
    </header>
  );
}
