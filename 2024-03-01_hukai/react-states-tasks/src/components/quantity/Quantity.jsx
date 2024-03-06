// React States

// Pirma užduotis
// Sukurkite komponentą pavadinimu "Quantity" ir priskirkite state'ą qty. Komponente atvaizduokite tris elementus:
// Minuso ikoną,
// Elementą kuriame atvaizduojama qty reikšmė.
// Pliuso ikoną
// Užregistruokite paspaudimo įvykius ikonoms pagal atitinkamą simbolį. Paspaudus ant elemento padidinkite arba pamažinkite qty reikšmę. T.y. +1 arba -1.

// Antra užduotis
// Sukurkite pirmos užduoties event’o funkcijų validaciją
// qty reikšmė negali būti mažesnė nei 0 ir didesnė nei 100.

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
