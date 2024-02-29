import "./App.css";
import products from "../data/data.js";
import Product from "../components/product/Product.jsx";

function App() {
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

export default App;
