// Trečia užduotis
// Sukurkite react biblioteka paremtą skaičiuotuvą. Aplikacijos esmė:
// Atvaizduojami:
// Mygtukai su skaičiais nuo 0 iki 9.
// Mygtukai su aritmetiniais veiksmais: Daugyba, dalyba, sudėtis ir atimtis.
// Mygtukas rezultatui išvesti.
// Suvedami duomenys: pirmas skaičius, aritmetinis veiksmas, antras skaičius ir po paspaudimo ant rezultato mygtuko šis atvaizduojamas komponente.
// Patikrinkite ar atliekamas veiksmas yra validus t.y. Ar nėra bandoma atlikti dalybos iš nulio.

import { useState } from "react";

const Calculator = () => {
  //   const handleClickNumber = (e) => {
  //     // console.log("veikia");
  //     console.log(e.target.textContent);
  //   };

  //   const handleClickOperator = (e) => {};

  const [firstDigit, setFirstDigit] = useState();
  const [secondDigit, setSecondDigit] = useState();
  const [action, setAction] = useState();

  // const handleClickNumber = (e) => {
  //   console.log(e.target.textContent);
  //   const value = e.target.textContent;

  //   //Tikriname, ar jau yra pasirinktas veiksmas
  //   // if
  //   // secondDigit();
  //   // //else
  //   // setFirstDigit(value);
  // };

  const handleClickNumber = (e) => {
    const value = e.target.textContent;
    if (action) {
      // Jeigu veiksmas jau yra pasirinktas, pridedame skaitmenį prie antrojo skaitmens
      setSecondDigit((prevSecondDigit) =>
        prevSecondDigit ? prevSecondDigit + value : value
      );
    } else {
      // Jeigu veiksmas dar nepasirinktas, pradedame naują pirmąjį skaitmenį
      setFirstDigit((prevFirstDigit) =>
        prevFirstDigit ? prevFirstDigit + value : value
      );
    }
  };

  const handleClickOperator = (e) => {
    console.log(e.target.textContent);
    const value = e.target.textContent;
    setAction(e.target.textContent);
  };

  const handleClickResult = (e) => {
    let result = 0;

    if (action === `+`) {
      result = firstDigit + secondDigit;
    } else if (action === `-`) {
      result = firstDigit - setSecondDigit;
    } else if (action === `/`) {
      result = firstDigit / secondDigit;
    } else {
      result = firstDigit * secondDigit;
    }
    console.log(result);
  };

  return (
    <>
      <div>Pirmas skaicius: {firstDigit}</div>
      <div>Veiksmas: {action}</div>
      <div>Antras skaicius: {secondDigit}</div>
      <div>
        <button onClick={handleClickNumber}>0</button>
        <button onClick={handleClickNumber}>1</button>
        <button onClick={handleClickNumber}>2</button>
        <button onClick={handleClickNumber}>3</button>
        <button onClick={handleClickNumber}>4</button>
        <button onClick={handleClickNumber}>5</button>
        <button onClick={handleClickNumber}>6</button>
        <button onClick={handleClickNumber}>7</button>
        <button onClick={handleClickNumber}>8</button>
        <button onClick={handleClickNumber}>9</button>
      </div>
      <div>
        <button onClick={handleClickOperator}>
          <i className="bi bi-plus-square"></i>
        </button>
        <button onClick={handleClickOperator}>
          <i className="bi bi-dash-square"></i>
        </button>
        <button onClick={handleClickOperator}>
          <i className="bi bi-slash-square"></i>
        </button>
        <button onClick={handleClickOperator}>
          <i className="bi bi-asterisk"></i>
        </button>
      </div>
      <div>
        <button onClick={handleClickResult}>rezultatas</button>
        <input type="number" />
      </div>
    </>
  );
};

export default Calculator;
