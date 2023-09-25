import { Headers } from "./MyHeader";
import { Link } from "react-router-dom";
export function PPage() {
  return (
    <>
      <Headers />
      <div className="p-page">
        <div className="background-images">
          <img src="https://i.dummyjson.com/data/products/2/2.jpg" alt="1" />
          <img src="https://i.dummyjson.com/data/products/18/1.jpg" alt="2" />
          <img src="https://i.dummyjson.com/data/products/39/1.jpg" alt="3" />
          <img src="https://i.dummyjson.com/data/products/11/2.jpg" alt="4" />
        </div>
        <div className="center-welc">
          <div className="welcome">
            <h1>
              Welcome to{" "}
              <Link
                className="linkShop"
                style={{ color: "black" }}
                to="/search"
              >
                Dream Shop
              </Link>
              !
            </h1>
            <div className="search-product">
              <h3>Look for a product!</h3>
              <div className="search-p">
                <h3 style={{ margin: "0 !important" }}>
                  <span
                    style={{ marginTop: 5 }}
                    className="bi bi-search"
                  ></span>
                  <input
                    className="giant-search"
                    type="text"
                    onKeyDown={(e) => {
                      console.log(e);
                      if (e.key === "Enter") {
                        console.log("hola");
                        window.location.href = `/search?q=${e.target.value}`;
                      }
                    }}
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="category-x">
          <div className="categories-s">
            <div className="medium-w-p">
              <div className="medium-w">
                <h3
                  className="search-c"
                  style={{ marginTop: 30, marginBottom: 30 }}
                >
                  Search by Categories
                </h3>
              </div>
            </div>
            <div className="all">
              <div className="category-s">
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/4/2.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/9/2.png"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/13/4.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/24/3.jpg"
                  />
                </div>
              </div>
              <div className="category-s">
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/18/3.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/35/thumbnail.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/40/2.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://http2.mlstatic.com/D_NQ_NP_988541-MLA50725756684_072022-O.webp"
                  />
                </div>
              </div>
              <div className="category-s">
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://tokyobay.com/cdn/shop/products/grant-brown-609785.jpg?v=1630949814&width=533"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://www.ukgolfacademy.com/wp-content/uploads/2022/06/52GA2009_White_FRONT-500x606.jpeg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/58/4.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPLuW84DTBuUN70nfheZHnNaWrLkq0S0u3OnG4IjeMsuq5NFddk9sefaATI-Ut64tuak&usqp=CAU"
                  />
                </div>
              </div>
              <div className="category-s">
                <div className="alt-cat">
                  <img
                    alt=""
                    src="https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/9/5/95061wd04.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.ebayimg.com/thumbs/images/g/JXIAAOSw2Uhj~7Ge/s-l225.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE2oYOPBhjrZhAwFhAR5kOjXiFK7VIUjmmw&usqp=CAU"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://media.theeverygirl.com/wp-content/uploads/2020/08/teg-10-shoes-every-woman-needs-3.jpg"
                  />
                </div>
              </div>
              <div className="category-s">
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/87/1.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://i.dummyjson.com/data/products/92/2.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/334/030/products/co8080_173_2021-09-24-11-29-151-7be4df08e6e1a8308616370102524749-1024-1024.jpg"
                  />
                </div>
                <div className="alt-cat">
                  <img
                    alt="x"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYgOdCppwD_JxBMV0LIwD5IHEueJl2ccF3g&usqp=CAU"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
