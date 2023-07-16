import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./SCSS/style.css";
import { Headers } from "./components/MyHeader";
import queryString from "query-string";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

function App() {
  //Hooks
  const [objects, setObjects] = useState(null);
  const [visualObject, setVisualObject] = useState(null);

  const [asideActive, setAsideActive] = useState(false);

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(undefined);

  const [categoryFilter, setCategoryFilter] = useState("none");
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minPrice, setMinPrice] = useState(0);

  const qParams = queryString.parseUrl(window.location.href).query;


  useEffect(() => {
    fetch(
      qParams.q
        ? `https://dummyjson.com/products/search?limit=100&q=${qParams.q}`
        : `https://dummyjson.com/products?limit=100`
    )
      .then((res) => res.json())
      .then((r) => {
        if (!objects) {
          if (r.products.length === 0) {
            window.location.href = "/404";
          }
          setObjects(r.products);
          setVisualObject(
            r.products.slice(10 * (page - 1), 10 * (page - 1) + 10)
          );
          setMaxPage(Math.ceil(r.products.length / 10));
        } else {
          setVisualObject(objects.slice(10 * (page - 1), 10 * (page - 1) + 10));
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
  }, [categoryFilter]);

  useEffect(() => {
    
    if (objects) {
      if (categoryFilter !== "none") {
        fetch(`https://dummyjson.com/products/category/${categoryFilter}`)
          .then((res) => res.json())
          .then((r) => {
            if (filterPrice(maxPrice, minPrice, r.products).length === 0) {
              window.location.href = "/404";
            }
            setObjects(
              !minPrice && !maxPrice
                ? r.products
                : filterPrice(maxPrice, minPrice, r.products)
            );
            setVisualObject(
              !minPrice && !maxPrice
                ? r.products
                : filterPrice(maxPrice, minPrice, r.products).slice(
                    10 * (page - 1),
                    10 * (page - 1) + 10
                  )
            );
            setMaxPage(
              Math.ceil(filterPrice(maxPrice, minPrice, r.products).length / 10)
            );
            setPage(1);
          });
      } else if (categoryFilter === "none") {
        fetch("https://dummyjson.com/products?limit=100")
          .then((res) => res.json())
          .then((r) => {
            if (filterPrice(maxPrice, minPrice, r.products).length === 0) {
              window.location.href = "/404";
            }
            setObjects(filterPrice(maxPrice, minPrice, r.products));
            setVisualObject(
              !minPrice && !maxPrice
                ? r.products
                : filterPrice(maxPrice, minPrice, r.products).slice(
                    10 * (page - 1),
                    10 * (page - 1) + 10
                  )
            );
            setMaxPage(
              Math.ceil(filterPrice(maxPrice, minPrice, r.products).length / 10)
            );
            setPage(1);
          });
      }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter, minPrice, maxPrice]);

  

  function sumPag() {
    setPage(page + 1);
  }

  function resPag() {
    setPage(page - 1);
  }

  function filterPrice(max, min, products) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].price > min && products[i].price < max) {
        result.push(products[i]);
      }
    }
    return result;
  }

  function changeAside() {
    setAsideActive(!asideActive);
  }

  function filtros(e) {
    const targets = e.target;
    for (let i = 0; i < 21; i++) {
      if (targets[i].checked) {
        setCategoryFilter(targets[i].value);
        break;
      }
    }

    if (targets[21].value) {
      setMinPrice(targets[21].value);
    } else {
      setMinPrice(0);
    }

    if (targets[22].value) {
      setMaxPrice(targets[22].value);
    } else {
      setMaxPrice(200000);
    }
  }

  return (
    <div>
      <Headers />
      <div className="store">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            filtros(e);
          }}
          className={!asideActive ? "aside" : "aside aside-active"}
        >
          <div className="categorys">
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="title"
            >
              <h1>Category</h1>
              <h1
                onClick={changeAside}
                className="close"
                style={{
                  marginRight: "10px",
                  color: "rgb(252, 42, 42)",
                  fontWeight: "bold",
                }}
              >
                <span className="bi bi-x-lg"></span>
              </h1>
            </div>
            <div className="category">
              <input
                value="none"
                defaultChecked
                type="radio"
                name="category"
                id="c"
              />{" "}
              <label htmlFor="category">none</label>
            </div>
            {categories.map((category) => (
              <div key={category} className="category">
                <input value={category} type="radio" name="category" id="c" />{" "}
                <label htmlFor="category">{category}</label>
              </div>
            ))}
          </div>
          <div className="price">
            <h1>Price</h1>
            <input name="min" type="number" placeholder="min" />
            <span style={{ color: "black" }} className="bi bi-dash-lg" />
            <input name="max" type="number" placeholder="max" />
          </div>
          <div className="button">
            <button type="submit">
              Filter <span style={{ scale: 2 }} className="bi bi-funnel-fill" />
            </button>
          </div>
        </form>
        <main>
          <div className="page">
            <div className="alt-pag">
              <div className="menu">
                <h1 onClick={changeAside}>
                  <span className="bi bi-list"></span>
                </h1>
              </div>
              <p>
                {page > 1 ? (
                  <button
                    onClick={(e) => {
                      resPag();
                      e.preventDefault();
                    }}
                    
                  >
                    <span className="bi bi-chevron-left" /> Prev{" "}
                  </button>
                ) : null}{" "}
                {page} of {maxPage}{" "}
                {page < maxPage ? (
                  <button
                    onClick={(e) => {
                      sumPag();
                      e.preventDefault();
                    }}
                    
                  >
                    Next <span className="bi bi-chevron-right" />
                  </button>
                ) : null}
              </p>
            </div>
          </div>
          {!visualObject
            ? null
            : visualObject.map((object) => {
                return (
                  <Link
                    key={object.id}
                    to={`/product/${object.id}`}
                    className="linkobject"
                  >
                    <div className="object">
                      <div style={{}} className="img">
                        <img
                          width="120px"
                          src={object.thumbnail}
                          alt={object.title}
                        />
                      </div>
                      <div className="info">
                        <div className="title">
                          <h2>{object.title}</h2>
                        </div>
                        <div className="price">
                          <h3 className="price">
                            {object.price}{" "}
                            <span style={{ color: "rgb(33, 174, 33)" }}>$</span>
                          </h3>
                        </div>
                        <div className="category rating">
                          <h3>
                            {object.rating}{" "}
                            <span style={{ color: "gray" }}>/</span> 5{" "}
                            <span
                              style={{ color: "orange" }}
                              className="bi bi-star-fill"
                            ></span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </main>
      </div>
    </div>
  );
}

export default App;
