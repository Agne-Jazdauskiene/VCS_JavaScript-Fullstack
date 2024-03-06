import { useState } from "react";
import "./App.css";

const App = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [action, setAction] = useState();
  const [result, setResult] = useState();

  const handleDigit = (e) => {
    // console.log("veikia");
    // console.log(e.target.textContent); //su target reiksme mes gauname consoleje musu elementa, ant kurio ivyko ivykis. textContent savybes pagalba galime istraukti skaiciu, kuris yra viduje - rodys consoleje skaiciu
    // setFirst(+e.target.textContent);
    // console.log(typeof first); nusistatom, kad pradzioj rodo undefined
    if (typeof action === "undefined") {
      setFirst(first + e.target.textContent);
    } else {
      setSecond(second + e.target.textContent);
    }
  };

  const handleAction = (e) => {
    // console.log("veikia");
    // console.log(e.target.textContent);
    setAction(e.target.textContent);
  };

  const handleResult = (e) => {
    // console.log(first, second, action);
    if (
      typeof first !== "string" ||
      typeof second !== "string" ||
      typeof action === "undefined"
    )
      return;

    // console.log(typeof parseInt(first));
    if (action === "+") {
      setResult(parseInt(first) + parseInt(second)); //priskiriam seteri
    }

    if (action === "-") {
      setResult(+first - +second);
    }

    if (action === "*") {
      setResult(+first * +second);
    }

    if (action === "/") {
      setResult(+first / +second);
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      {/*veiksmo atvaizdavimas prie rezultatu*/}
      <div className="result">
        {first}
        {action}
        {second}={result}
      </div>
      <div className="digits">
        <button onClick={handleDigit}>0</button>
        <button onClick={handleDigit}>1</button>
        <button onClick={handleDigit}>2</button>
        <button onClick={handleDigit}>3</button>
        <button onClick={handleDigit}>4</button>
        <button onClick={handleDigit}>5</button>
        <button onClick={handleDigit}>6</button>
        <button onClick={handleDigit}>7</button>
        <button onClick={handleDigit}>8</button>
        <button onClick={handleDigit}>9</button>
      </div>
      <div className="actions">
        <button onClick={handleAction}>+</button>
        <button onClick={handleAction}>-</button>
        <button onClick={handleAction}>*</button>
        <button onClick={handleAction}>/</button>
      </div>
      <div className="calculate">
        <button onClick={handleResult}>=</button>
      </div>
    </>
  );
};

export default App;

// Stasio var.is yotube

// import { useState } from "react";
// import "./Buttons.css";

// const Buttons = () => {
//   const [value, setValue] = useState("");
//   <div className="container">
//     <div className="display">{value}</div>
//     <div className="numbers">
//       <input
//         type="button"
//         value="7"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="8"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="9"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="/"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="4"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="5"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="6"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="*"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="1"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="2"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="3"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="+"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="."
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="0"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input
//         type="button"
//         value="-"
//         onClick={(e) => setValue(value + e.target.value)}
//       />
//       <input type="button" value="=" onClick={(e) => setValue(eval(value))} />
//     </div>
//   </div>;
// };
