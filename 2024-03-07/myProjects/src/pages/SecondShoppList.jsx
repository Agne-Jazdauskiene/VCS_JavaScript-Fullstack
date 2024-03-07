// import "./App.css";
import products from "../components/second-shopping-list/data/data.js";
import Product from "../components/second-shopping-list/product/Product.jsx";

function SecondShoppList() {
  return (
    <>
      <div className="products">
        {products.map((value, index) => (
          <Product key={index} value={value} />
        ))}
      </div>
    </>
  );
}

export default SecondShoppList;
