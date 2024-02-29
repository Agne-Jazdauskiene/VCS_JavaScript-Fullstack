import "../../data/data.js";
import Price from "../price/Price.jsx";
import Button from "../button/Button.jsx";
import "../product/Product.css";
// import Rating from "../rating/Rating.jsx";

const Product = ({ value }) => {
  return (
    <div className="product-container">
      <img src={value.thumbnail} alt="product photo" />
      <div className="title-info-box">
        <div className="title">{value.title}</div>
        <div className="product-info">{value.description}</div>
      </div>
      <div className="price-btn">
        <div className="price">
          <Price price={value.price} />
          {/* <div className="discount-price">
        <Price /> */}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Product;
