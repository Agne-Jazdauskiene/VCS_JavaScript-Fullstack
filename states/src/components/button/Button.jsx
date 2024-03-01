import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  // console.log("Button komponentas uzdetas");

  const handleClick = () => {
    //Naujos count reiksmes priskyrimas
    //Pirmas budas
    // setCount(count + 1);//galima sitaip
    //Antras budas
    // setCount((preveousCountValue) => preveousCountValue + 1);
    setCount((prev) => prev + 1); //arba su funkcija
    // console.log("veikia");
    // x++;
    // console.log(x);
  };

  return (
    <>
      <h2>Mygtuko paspaudimai</h2>
      <div>Rezultatas: {count}</div>
      <button onClick={handleClick}>Paspausk mane</button>
    </>
  );
};

export default Button;
