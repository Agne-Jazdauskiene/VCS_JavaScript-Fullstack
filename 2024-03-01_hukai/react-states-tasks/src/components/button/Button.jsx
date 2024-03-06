import { useState } from "react";

const Button = () => {
  const [qty, setCount] = useState(0);
  const handleClickPlus = (e) => {
    setCount(qty + 1);
  };
  const handleClickMinus = (e) => {
    setCount(qty - 1);
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

export default Button;

// import { useState } from "react"

// const Quantity = () => {
//     const [qty, setCount] = useState(0)
//     const handleClickplus = (e) => {
//         setCount(qty + 1)
//     };
// const handleClickminus = (e) => {
//     setCount(qty - 1)
// }
//     return(
//         <>
//         <button onClick={handleClickplus}>
//             <i class="bi bi-plus-square"></i>
//         </button>
//         <div>{qty}</div>
//         <button onClick={handleClickminus}>
//             <i class="bi bi-dash-square"></i>
//         </button>
//         </>
//     )
// }
// export default Quantity
