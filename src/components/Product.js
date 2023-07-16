import { Link, useParams } from "react-router-dom";
import { Headers } from "./MyHeader";
import { useEffect, useState, useContext } from "react";
import { CartContext } from './CartContext';

export function Product() {
  const { id } = useParams();

  const [cantidad, setCantidad] = useState(1);
  const [objeto, setObjeto] = useState([]);

  const [cart, setCart] = useContext(CartContext);
  

  function addToCart() {
    
    const product = {units: cantidad,name: objeto.title, price: objeto.price, image: objeto.thumbnail, id: objeto.id}
    let exist = false
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === product.name) {
        exist = true
        break;
      }
    }
    if (!exist) {
      setCart(currentCart => [...currentCart, product])
    }
    
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => r.json())
      .then((res) => {
        setObjeto(res);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (id <= 100 && id >= 1) {
    return (
      <div className="container-max-product">
        <Headers />
        <div className="page-product">
          <div className="back">
            <Link
              to="/search
            "
              className="goback"
            >
              <h1>
                <span className="bi bi-chevron-left"></span>Go back
              </h1>
            </Link>
          </div>
          <div className="main-product">
            <div className="image-product">
              <img width={"100%"} src={objeto.thumbnail} alt="" />
            </div>
            <div className="info-product-p">
              <h2>
                {objeto.title} <span className="gray">({objeto.stock})</span>{" "}
              </h2>
              <div className="info-product-ex">
                <h3>
                  {objeto.rating} <span style={{ color: "gray" }}>/</span> 5{" "}
                  <span
                    style={{ color: "orange" }}
                    className="bi bi-star-fill"
                  ></span>
                </h3>
                <h3 className="price">
                  {objeto.price * cantidad}{" "}
                  <span style={{ color: "rgb(33, 174, 33)" }}>$</span>
                </h3>
                <h3>
                  Buy{" "}
                  <select
                    onChange={(e) => {
                      setCantidad(e.target.value);
                    }}
                    name="units"
                    id="units"
                  >
                    <option value="1">1 Unit</option>
                    <option value="2">2 Units</option>
                    <option value="3">3 Units</option>
                    <option value="4">4 Units</option>
                    <option value="5">5 Units</option>
                  </select>
                </h3>
              </div>
              <div className="buttons-buy">
                <Link to={`/product/${id}/buy/${cantidad}`}>
                  <button className="buy-button">
                    Buy <span className="bi bi-basket3"></span>
                  </button>
                </Link>
                  <button className="add-button" onClick={addToCart}>
                    Add to cart <span className="bi bi-cart-plus"></span>
                  </button>
              </div>
            </div>
          </div>
          <div className="other-info">
            <div className="desciption">
              <h1>Description</h1>
              <b>{objeto.description}</b>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "/404"

  }
}
