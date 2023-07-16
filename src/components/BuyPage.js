import { useEffect, useState } from "react";
import { Headers } from "./MyHeader";
import { useParams, Link } from "react-router-dom";

export function BuyPage() {
  //Hooks

  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(undefined)

  const [method, setMethod] = useState(true);
  const [parts, setParts] = useState(1);

  const { id, units } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((r) => {
        setProduct(r);
        setPrice(r.price * units)
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (id <= 100 && id >= 1) {
    return (
      <div className="containerbuy">
        <Headers />
        <div className="pagebuy">
          <main className="mainbuy">
            <div className="back">
              <Link to={`/product/${id}`} className="goback">
                <h1>
                  <span className="bi bi-chevron-left"></span>Go back
                </h1>
              </Link>
            </div>
            <div className="title-buy">
              <h2>Payment zone</h2>
            </div>
            <div className="info input-m-b">
              <p>Payment method</p>
              <div className="select">
                <div
                  onClick={(e) => {
                    setMethod(true);
                  }}
                  className={`opt opt-1 ${method ? "opt-active" : ""}`}
                >
                  <h2>
                    <span className="bi bi-credit-card"></span> Credit card
                  </h2>
                </div>
                <div
                  onClick={(e) => {
                    setMethod(false);
                  }}
                  className={`opt opt-2 ${!method ? "opt-active" : ""}`}
                >
                  <h2>
                    <span className="bi bi-credit-card-2-back"></span> Debit
                    card
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-info">
              <div className="row-1">
                <div className="info number-card">
                  <p>Card number</p>
                  <div className="input">
                    <span className="bi bi-credit-card-2-front"></span>
                    <input
                      inputMode="decimal"
                      type="number"
                      maxLength="17"
                      placeholder="1234 5678 9123 4567"
                    />
                  </div>
                </div>
                <div className="info expiration-date">
                  <p>Expiration date</p>
                  <div className="input">
                    <span className="bi bi-calendar-date"></span>
                    <input type="text" placeholder="07/2030" />
                  </div>
                </div>
                <div className="info security-code">
                  <p>Security code</p>
                  <div className="input">
                    <span className="bi bi-lock"></span>
                    <input maxLength="3" type="text" placeholder="374" />
                  </div>
                </div>
              </div>

              <div className="row-2">
                <div className="info name-last">
                  <p>Name and last name</p>
                  <div className="input">
                    <span className="bi bi-person-fill"></span>
                    <input type="text" placeholder="Taylor Brown" />
                  </div>
                </div>
                <div className="info id-holder">
                  <p>ID card holder</p>
                  <div className="input">
                    <span className="bi bi-person-vcard"></span>
                    <input type="text" placeholder="85986346" />
                  </div>
                </div>
              </div>
            </div>
            <div className="address-info card-info">
              <div className="info address">
                <p>Address</p>
                <div className="input">
                  <span className="bi bi-house-fill"></span>
                  <input type="text" placeholder="123 MacDougal Street" />
                </div>
              </div>
              <div className="zip-code info">
                <p>zip code</p>
                <div className="input">
                  <span className="bi bi-123"></span>
                  <input type="text" name="zip" id="zip" placeholder="10017" />
                </div>
              </div>
              
                {method ? <div className="payments info">
              <p>Payments:</p>
              <select onChange={e => {
                setParts(e.target.value)
              }} name="payments" id="payments">
                <option selected value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">
                  12
                </option>
              </select>
              </div> : null}
            </div>
          </main>
          <div className="infobuy">
            <div className="info-buy">
              <div className="img-title">
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
              <div className="middle-div"></div>
              <div className="product-price">
                <div>
                  <h4>Product:</h4>
                  <p>
                    {product.price}
                    <span style={{ color: "green" }}>$</span>
                  </p>
                </div>
                <div>
                  <h4>Units</h4>
                  <p>{units}</p>
                </div>
                <div>
                  <h4>Payment/s:</h4>
                  <p>{parts}</p>
                </div>
              </div>
              <div className="middle-div"></div>
              <div className="total">
                {parts > 1 && method ? (
                  <h3>
                    Total: {parts} x {Math.ceil(price / parts)}
                    <span style={{ color: "green" }}>$</span>
                  </h3>
                ) : (
                  <h3>
                    Total: {price}
                    <span style={{ color: "green" }}>$</span>
                  </h3>
                )}
                <button className="pay-btn">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "/404";
  }
}
