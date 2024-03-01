import { useState } from "react";

const Quantity = () => {
  const [qty, setCount] = useState(0);
  const handleClickPlus = (e) => {
    if (qty < 10) setCount(qty + 1);
  };
  const handleClickMinus = (e) => {
    if (qty > 0) setCount(qty - 1);
  };

  return (
    <>
      <button onClick={handleClickPlus}>
        <i className="bi bi-plus-square"></i>
      </button>
      <div>{qty}</div>
      <button onClick={handleClickMinus}>
        {" "}
        <i className="bi bi-dash-square"></i>
      </button>
    </>
  );
};

export default Quantity;
